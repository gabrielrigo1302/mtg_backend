import { IsArray, IsBoolean, IsEnum, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export declare enum Color {
  White = 0,
  Blue = 1,
  Black = 2,
  Red = 3,
  Green = 4,
}

export declare enum ColorIdentity {
  W = 0,
  U = 1,
  B = 2,
  R = 3,
  G = 4,
}

export enum Rarity {
  "Basic Land" = 0,
  Common = 1,
  Uncommon = 2,
  "Mythic Rare" = 3,
  Timeshifted = 4,
  Masterpiece = 5,
}

export enum Layout {
  normal = 0,
  split = 1,
  flip = 2,
  "double-faced" = 3,
  token = 4,
  plane = 5,
  scheme = 6,
  phenomenon = 7,
  leveler = 8,
  vanguard = 9,
}

export enum Legality {
  Legal = 0,
  Banned = 1,
  Restricted = 2,
}

export class BlockLegality {
  format: string;
  legality: keyof typeof Legality;
}

export class CardDto {

  @IsString()
  name: string;

  @IsString()
  manaCost: string;

  @IsNumber()
  cmc: number;

  @IsArray()
  colors: (keyof typeof Color)[];
  
  @IsArray()
  colorIdentity: (keyof typeof ColorIdentity)[];
  
  @IsString()
  type: string;

  @IsArray()
  @IsString({ each: true })
  supertypes: string[];

  @IsArray()
  @IsString({ each: true })
  types: string[];

  @IsArray()
  @IsString({ each: true })
  subtypes: string[];

  @IsEnum(Rarity)
  rarity: keyof typeof Rarity;
  
  @IsString()
  set: string;
  
  @IsString()
  setName: string;
  
  @IsString()
  artist: string;
  
  @IsString()
  flavor?: string;
  
  @IsEnum(Layout)
  layout: keyof typeof Layout;
  
  @IsNumber()
  multiverseid: number;
  
  @IsString()
  imageUrl: string;
  
  @IsArray()
  variations: number[];
  
  @IsArray()
  @IsString({ each: true })
  printings: string[];
  
  @IsString()
  originalText: string;
  
  @IsString()
  originalType: string;
  
  @IsArray()
  legalities: BlockLegality[];
  
  @IsString()
  id: string;
}

export class CardFilterDto {
  
  @IsString({
    message: 'O campo name deve ser uma string'
  })
  @IsOptional()
  name?: string;
  
  @IsString()
  @IsOptional()
  layout?: string;
  
  @IsNumberString()
  @IsOptional()
  cmc?: number;
  
  @IsString()
  @IsOptional()
  colors?: string;
  
  @IsString()
  @IsOptional()
  colorIdentity?: string;
  
  @IsString()
  @IsOptional()
  type?: string;
  
  @IsString()
  @IsOptional()
  supertypes?: string;
  
  @IsString()
  @IsOptional()
  types?: string;
  
  @IsString()
  @IsOptional()
  subtypes?: string;
  
  @IsString()
  @IsOptional()
  rarity?: string;
  
  @IsString()
  @IsOptional()
  set?: string;
  
  @IsString()
  @IsOptional()
  setName?: string;
  
  @IsString()
  @IsOptional()
  text?: string;
  
  @IsString()
  @IsOptional()
  flavor?: string;
  
  @IsString()
  @IsOptional()
  artist?: string;
  
  @IsString()
  @IsOptional()
  number?: string;
  
  @IsString()
  @IsOptional()
  power?: string;
  
  @IsString()
  @IsOptional()
  toughness?: string;
  
  @IsNumberString()
  @IsOptional()
  loyalty?: number;

  @IsString()
  @IsOptional()
  foreignName?: string;
  
  @IsString()
  @IsOptional()
  language?: string;
  
  @IsString()
  @IsOptional()
  gameFormat?: string;

  @IsEnum(Legality, {
    message: `O campo legality deve ser umas das opções presente no Enum de Legality`
  })
  @IsOptional()
  legality?: keyof typeof Legality;
  
  @IsNumberString()
  @IsOptional()
  page?: number;
  
  @IsNumberString() 
  @IsOptional()
  pageSize?: number;
  
  @IsString()
  @IsOptional()
  orderBy?: string;

  @IsBoolean()
  @IsOptional()
  random?: boolean;
  
  @IsString()
  @IsOptional()
  contains?: string;
}