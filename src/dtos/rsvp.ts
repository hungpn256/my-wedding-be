import { IsEmail, IsNumber, IsString, ValidateIf } from 'class-validator';

export class RSVP {
  @IsEmail()
  @ValidateIf((object, value) => value !== null)
  email: string | null;

  @IsString()
  content: string;

  @IsString()
  name: string;
}

export class ListRSVP {
  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;
}
