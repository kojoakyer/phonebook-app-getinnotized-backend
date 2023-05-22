/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contact>;

@Schema()
export class Contact {

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  phonenumber: string;

  @Prop({ default: Date.now() })
  updatedDate: Date;

  @Prop({ default: Date.now() })
  createdDate: Date;


}

export const ContactSchema = SchemaFactory.createForClass(Contact);