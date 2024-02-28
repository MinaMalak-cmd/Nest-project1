import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  async create(
    createProductDto: CreateProductDto,
    res: Response,
  // ): Promise<Product> {
  ): Promise<Response<any, Record<string, Product>>> {
    try {
      const newStudent = await this.productModel.create(createProductDto);
      const data = await newStudent.save();
      console.log("🚀 ~ data:", data)
      return res.status(201).json({ data });
    } catch (error) {
      console.log('🚀 ~ ProductService ~ create ~ error:', error);
    }
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  findOne(id: number): string {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto): string {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
