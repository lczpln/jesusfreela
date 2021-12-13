import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileDocument = File & Document;

@Schema({ timestamps: true })
export class File {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  value: number;
}

export const FileSchema = SchemaFactory.createForClass(File);
