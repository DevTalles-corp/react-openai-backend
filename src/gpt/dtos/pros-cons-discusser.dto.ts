import { IsString } from 'class-validator';

export class ProsConsDiscusserDto {

  @IsString()
  readonly prompt: string;
  
}
