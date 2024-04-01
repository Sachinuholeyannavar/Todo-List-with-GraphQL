import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class RefreshInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  token: string;
}
