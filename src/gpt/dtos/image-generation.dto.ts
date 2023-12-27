import { IsOptional, IsString } from 'class-validator';


export class ImageGenerationDto {

  @IsString()
  readonly prompt: string;


  @IsString()
  @IsOptional()
  readonly originalImage?: string;

  @IsString()
  @IsOptional()
  readonly maskImage?: string;


}
