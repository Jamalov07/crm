import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsOptional, IsString } from "class-validator";
export class SearchLeadDto {
  @ApiProperty({ example: "Kamol", description: "Lid name" })
  @IsOptional()
  @IsString()
  first_name: string;
  @ApiProperty({ example: "Kamolov", description: "Lid surname" })
  @IsOptional()
  @IsString()
  last_name: string;
  @ApiProperty({ example: "99 991 99 22", description: "Lid phone number" })
  @IsOptional()
  @IsString()
  phone_number: string;
  @ApiProperty({ example: "telegram", description: "target name" })
  @IsOptional()
  @IsString()
  foundvia_name: string;
  @ApiProperty({ example: "stage-1", description: "group name" })
  @IsOptional()
  @IsString()
  group_name: string;
  @ApiProperty({ example: "12-12-2012", description: "test date" })
  @IsOptional()
  @IsDateString()
  test_lesson_date: Date;
  @ApiProperty({ example: "12:00", description: "test time" })
  @IsOptional()
  @IsString()
  test_lesson_time: string;
  @ApiProperty({ example: "12-20-2012", description: "createdAt" })
  @IsOptional()
  @IsDateString()
  createdAt: Date;
  @ApiProperty({ example: "active", description: "lid status" })
  @IsOptional()
  @IsString()
  status_text: string;
}
