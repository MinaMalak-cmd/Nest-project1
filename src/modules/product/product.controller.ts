import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '../../schemas/product.schema';
import { Response } from 'express';

@Controller('product') // or '/product'
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto, @Res() res:Response) {
    return this._productService.create(createProductDto, res);
  }

  @Get()
  findAll():Promise<Product[]> {
    return this._productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string):string {
    return this._productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto):string {
    return this._productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string):string {
    return this._productService.remove(+id);
  }
}
