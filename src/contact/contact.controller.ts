/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Res,HttpStatus, Post, Param, Delete, Patch, Query, Req } from '@nestjs/common';

import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) {}


    @Post()
    async createContact(
        @Res() response,
        @Body() createContactDto: CreateContactDto,
    ){
        const newContact = await this.contactService.createContact(createContactDto);
        return response.status(HttpStatus.CREATED).json({
          newContact,
        });

    }

    @Get()
    async read() {
      return await this.contactService.readAllContact();
    }
  

    @Get('/search')
    async search(  @Req() req, @Query() query:string ) {
      return this.contactService.searchContact(req);
    }
  
      
    @Get('/:id')
    async stream(@Param('id') id: string) {
      return this.contactService.readBook(id);
    }


  



    @Patch('/:id')
    async update(@Param('id') id: string, @Body() updateBookDto: UpdateContactDto) {
      
        return this.contactService.update(id,updateBookDto);
      
    }
  
  
  
    @Delete('/:id')
    async delete(@Res() response, @Param('id') id, ) {
    
        const  deletedBook =  await this.contactService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedBook
        })
      
      
    }

}
