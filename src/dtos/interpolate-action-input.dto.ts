import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
// import { ActionInput } from '../decorators/action-input.decorator';
import { Input } from '../decorators/input.decorator';
import { YamlArray } from '../decorators/yaml-array.decorator';

// @ActionInput()
export class InterpolateActionInputDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Input('env_file')
  envFile: string;

  @IsOptional()
  @IsBoolean()
  @Input('env_file_as_fallback')
  envFileAsFallback: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Input('env_variable_prefix')
  envVariablePrefix: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Input('env_variable_suffix')
  envVariableSuffix: string;

  @IsOptional()
  @IsArray()
  @YamlArray()
  @Input('replace_file_extensions')
  replaceFileExtensions: Array<string>;

  @IsOptional()
  @IsArray()
  @YamlArray()
  @Input('replace_file_exclude_paths')
  replaceFileExcludePaths: Array<string>;
}
