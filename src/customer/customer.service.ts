import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from 'src/schemas/customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const createdCustomer = new this.customerModel(createCustomerDto);

    return createdCustomer.save();
  }

  async findAll(
    skip: number,
    limit: number,
    filter: any = undefined,
    sort: any = undefined,
  ) {
    skip = skip || 0;
    limit = limit || 10;

    const data = await this.customerModel
      .find(filter ? filter : {})
      .skip(skip)
      .limit(limit)
      .sort(sort);

    const count = data.length;
    const totalCount = await this.customerModel.count();
    const totalRecords = await this.customerModel
      .find(filter ? filter : {})
      .count();
    const totalPages = Math.ceil(totalRecords / limit);

    return { items: data, count, totalRecords, totalPages, totalCount };
  }

  async findOne(id: string) {
    const foundCustomer = await this.customerModel.findById(id);

    if (foundCustomer) return foundCustomer;
    throw new NotFoundException();
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const updatedCustomer = await this.customerModel.findByIdAndUpdate(
      id,
      updateCustomerDto,
      { new: true },
    );

    if (updatedCustomer) return updatedCustomer;
    throw new NotFoundException();
  }

  async remove(id: string) {
    const foundCustomer = await this.customerModel.findByIdAndRemove(id);

    if (foundCustomer) return foundCustomer;
    throw new NotFoundException();
  }
}
