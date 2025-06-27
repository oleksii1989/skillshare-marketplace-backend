import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  entityType!: 'user' | 'provider';

  @IsString()
  type!: 'individual' | 'company';

  @IsString()
  @IsOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  companyName?: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsOptional()
  mobileNumber?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  businessTaxNumber?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  password!: string;
}
