import { FoodAllergen, foodAllergen, MealType, mealType, SymptomCategory } from "./enums";
import { PartialType } from "@nestjs/mapped-types";
import { IsDate, IsEmail, IsNotEmpty, MaxLength, MinLength, IsEnum, IsOptional, IsArray, Min, Max, IsNumber } from 'class-validator';

export class CreateMealDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  userID!: string;

  @IsNotEmpty()
  @IsEnum(MealType)
  mealType!: mealType;

  @IsNotEmpty()
  @IsDate()
  timeEaten!: Date;

  @IsOptional()
  @MaxLength(255)
  notes!: string;
}

export class UpdateMealDto extends PartialType(CreateMealDto) {
  @IsOptional()
  @MinLength(3)
  @MaxLength(32)
  override userID?: string;

  @IsOptional()
  @IsEnum(MealType)
  override mealType?: mealType;

  @IsOptional()
  @IsDate()
  override timeEaten?: Date;

  @IsOptional()
  @MaxLength(255)
  override notes?: string;
}

export class CreateSymptomDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  name!: string;

  @IsNotEmpty()
  @IsEnum(SymptomCategory)
  category!: string;
}

export class UpdateSymptomDto extends PartialType(CreateSymptomDto) {
  @IsOptional()
  @MinLength(3)
  @MaxLength(32)
  override name?: string;

  @IsOptional()
  @IsEnum(SymptomCategory)
  override category?: string;
}

export class CreateFoodDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  name!: string;

  @IsNotEmpty()
  @IsArray()
  @IsEnum(FoodAllergen)
  allergens!: foodAllergen[];
}

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
  @IsOptional()
  @MinLength(3)
  @MaxLength(32)
  override name?: string;

  @IsOptional()
  @IsArray()
  @IsEnum(FoodAllergen)
  override allergens?: foodAllergen[];
}

export class CreateMealEntryDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  mealID!: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  foodID!: string;
}

export class CreateSymptomLogDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  userID!: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  symptomID!: string;

  @IsNotEmpty()
  @IsDate()
  timeExperienced!: Date;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(10)
  severity!: number;

  @IsOptional()
  @MaxLength(255)
  notes!: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  username!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password!: string;
}

export class SignUpDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  username!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password!: string;
}

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password!: string;
}