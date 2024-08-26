import { IsEmail, IsNumber, IsString } from 'class-validator';

export class RSVP {
  @IsEmail()
  email: string;

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
