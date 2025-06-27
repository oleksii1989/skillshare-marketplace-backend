import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Provider } from '../entities/provider.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Provider)
    private providerRepository: Repository<Provider>,
    private jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto): Promise<User | Provider> {
    if (!createUserDto.password) {
      throw new BadRequestException('Password is required');
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const entityData = { ...createUserDto, password: hashedPassword };

    if (createUserDto.entityType === 'provider') {
      const provider: Provider = this.providerRepository.create(entityData);
      return await this.providerRepository.save(provider);
    } else {
      const user: User = this.userRepository.create(entityData);
      return await this.userRepository.save(user);
    }
  }

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({ where: { email } });
    const provider = await this.providerRepository.findOne({
      where: { email },
    });
    const entity = user || provider;

    if (!entity || !(await bcrypt.compare(password, entity.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: entity.id,
      email: entity.email,
      type: entity.type,
      entityType: user ? 'user' : 'provider',
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
