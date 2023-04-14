import { IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateCallRequest {
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  username: string;
  @IsNotEmpty()
  @Min(1)
  call_duration: number;
}
