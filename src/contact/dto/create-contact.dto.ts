/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, MaxLength} from "class-validator";
export class CreateContactDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly firstname: string;
    
    @IsString()
    @IsNotEmpty()
    readonly lastname: string;
    
    @IsNumber()
    @IsNotEmpty()
    readonly phonenumber: number;


}