import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ActionInput } from '../decorators/action-input.decorator';

@ActionInput()
export class InterpolateActionInputDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  envFile: string;

  @IsOptional()
  @IsBoolean()
  envFileAsFallback: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  envVariablePrefix: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  envVariableSuffix: string;

  @IsOptional()
  @IsArray()
  replaceFileExtensions: Array<string>;

  @IsOptional()
  @IsArray()
  replaceFileExcludePaths: Array<string>;
}
