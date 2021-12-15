import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  photo: string;

  @Prop()
  fullName: string;

  @Prop({ unique: true })
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ select: false })
  password: string;

  @Prop()
  occupation: string;

  @Prop({ select: false })
  __v: number;

  @Prop({ select: false })
  _id: string;

  @Prop({ select: false })
  createdAt: Date;

  @Prop({ select: false })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
