import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
// import { ActionInput } from '../decorators/action-input.decorator';
import { Input } from '../decorators/input.decorator';

// @ActionInput()
export class InterpolateActionInputDto {
  @Input('env_file')
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  envFile: string;

  @Input('env_file_as_fallback')
  @IsOptional()
  @IsBoolean()
  envFileAsFallback: boolean;

  @Input('env_variable_prefix')
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  envVariablePrefix: string;

  @Input('env_variable_suffix')
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  envVariableSuffix: string;

  @Input('replace_file_extensions')
  @IsOptional()
  @IsArray()
  replaceFileExtensions: Array<string>;

  @Input('replace_file_exclude_paths')
  @IsOptional()
  @IsArray()
  replaceFileExcludePaths: Array<string>;
}
