/* eslint-disable prettier/prettier */
import { Exclude } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";
export class UpdateContactDto {

    @IsOptional()
    @Exclude()
    _id?: string;

    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    firstname: string;
    
    @IsString()
    @IsNotEmpty()
    lastname: string;


    @IsNumber()
    @IsNotEmpty()
    phonenumber: number;

}