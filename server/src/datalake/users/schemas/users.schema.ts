import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema({
  toObject: {
    versionKey: false,
  },
})
export class User extends Document {
  @Prop({ required: true, unique: true, type: SchemaTypes.String })
  username: string;

  @Prop({ required: true, type: SchemaTypes.String })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
