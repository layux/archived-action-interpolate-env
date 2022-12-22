import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Input } from '../decorators/input.decorator';

export class InterpolateActionInputDto {
  @Input('env_file')
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  envFile = '';

  @Input('env_file_as_fallback')
  @IsOptional()
  @IsBoolean()
  envFileAsFallback = false;

  @Input('env_variable_prefix')
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  envVariablePrefix = '';

  @Input('env_variable_suffix')
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  envVariableSuffix = '';

  @Input('replace_file_extensions')
  @IsOptional()
  @IsArray()
  replaceFileExtensions = new Array<string>();

  @Input('replace_file_exclude_paths')
  @IsOptional()
  @IsArray()
  replaceFileExcludePaths = new Array<string>();
}
