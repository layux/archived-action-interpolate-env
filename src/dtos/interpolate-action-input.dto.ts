import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

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
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  replaceFileExtensions: Array<string>;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  replaceFileExcludePaths: Array<string>;
}
