import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  toObject: {
    versionKey: false,
  },
})
export class Client extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  gender: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
