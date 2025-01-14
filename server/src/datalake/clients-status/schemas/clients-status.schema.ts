import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

enum Status {
  Busy = 'Busy',
  Available = 'Available',
  Offline = 'Offline',
  Donotdisturb = 'Do not disturb',
}

interface IStatus {
  status: Status;
}

@Schema()
export class ClientStatus extends Document<IStatus> {
  @Prop({
    required: true,
    type: SchemaTypes.String,
    enum: Object.values(Status),
  })
  status: Status;
}

export const ClientStatusSchema = SchemaFactory.createForClass(ClientStatus);
