import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FileService } from './file.service';
import { FileController } from './file.controller';

import { File, FileSchema } from 'src/schemas/file.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
