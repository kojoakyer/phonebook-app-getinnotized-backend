/* eslint-disable prettier/prettier */
import {  Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './model/contact.schema';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';



@Injectable()
export class ContactService {
    constructor(@InjectModel(Contact.name) private contactModel: Model<Contact>) { }

    async createContact(createBookDto: CreateContactDto): Promise<Contact> {
        
        const newContact =  new this.contactModel({
            firstname:createBookDto.firstname,
            lastname:   createBookDto.lastname,
            phonenumber:createBookDto.phonenumber,
        
        })

        return newContact.save();
    }

    async readAllContact(): Promise<any> {
        return this.contactModel.find()
    }

    
    async readBook(id:string): Promise<any> {
        return this.contactModel.findOne({_id:id}).exec();
    }

    async searchContact(req): Promise<any> {

        let options = {}

        if(req.query.s){
             options = {
                $or:[
                    {title:new RegExp(req.query.s.toString())}
                ]
            }
        }

        const data = this.contactModel.find(options)

        return data
    
    }


    async update(id:string, updateContactDto: UpdateContactDto): Promise<Contact> {

         const updatedContact = await this.contactModel.findByIdAndUpdate(({_id:id})._id, updateContactDto,{new:true})

         return updatedContact.save()
    }

    
    async delete(id: string): Promise<any> {
        return await this.contactModel.findByIdAndRemove({_id:id}).exec();
    }

}