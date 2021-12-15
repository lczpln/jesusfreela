import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileDocument = File & Document;

@Schema({ timestamps: true })
export class File {
  @Prop()
  joint: string;

  @Prop()
  type: string;

  @Prop()
  pointNumber: string;

  @Prop()
  identification: string;

  @Prop()
  address: string;

  @Prop()
  segment: string;

  @Prop()
  propertyType: string;

  @Prop()
  city: string;

  @Prop()
  uf: string;

  @Prop()
  state: string;

  @Prop()
  cnpj: string;

  @Prop()
  demand: string;

  @Prop()
  responsible: string;

  @Prop()
  service: string;

  @Prop()
  lpu: string;

  @Prop()
  status: string;

  @Prop()
  history: string;

  @Prop()
  oldStatus: string;

  @Prop()
  oldHistory: string;

  @Prop()
  estimatedMeasurementProtocolDate: string;

  @Prop()
  measurementProtocolDate: string;

  @Prop()
  protocol: string;

  @Prop()
  estimatedMeasurementDoneDate: string;

  @Prop()
  measurementDate: string;

  @Prop()
  documentReleasedNumber: string;

  @Prop()
  dueDate: string;

  @Prop({ select: false })
  __v: number;
}

export const FileSchema = SchemaFactory.createForClass(File);
