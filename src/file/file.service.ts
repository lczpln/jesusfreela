import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File, FileDocument } from 'src/schemas/file.schema';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FileService {
  constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) {}

  async create(createFileDto: CreateFileDto) {
    const createdFile = new this.fileModel(createFileDto);

    return createdFile.save();
  }

  async findAll() {
    return this.fileModel.find({});
  }

  async findOne(id: string) {
    const foundFile = await this.fileModel.findById(id);

    if (foundFile) return foundFile;
    throw new NotFoundException();
  }

  async update(id: string, updateFileDto: UpdateFileDto) {
    const updatedFile = await this.fileModel.findByIdAndUpdate(
      id,
      updateFileDto,
      { new: true },
    );

    if (updatedFile) return updatedFile;
    throw new NotFoundException();
  }

  async remove(id: string) {
    const foundFile = await this.fileModel.findByIdAndRemove(id);

    if (foundFile) return foundFile;
    throw new NotFoundException();
  }
}
