import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';

export class RSVP {
  @IsEmail()
  email: string;

  @IsString()
  content: string;

  @IsDate()
  createdAt: string;
}

export class ListRSVP {
  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;
}
