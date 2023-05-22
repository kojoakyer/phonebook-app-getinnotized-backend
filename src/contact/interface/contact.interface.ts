/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface IContact extends Document {
  readonly firstname: string;
  readonly lastname: number;
  readonly phonenumber: string;
}
