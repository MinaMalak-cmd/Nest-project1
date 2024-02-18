import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './product.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name : Product.name , schema: ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

// import { MongooseModule } from '@nestjs/mongoose';
// import { Cat, CatSchema } from './schemas/cat.schema';

// @Module({
//   imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
//   controllers: [CatsController],
//   providers: [CatsService],
// })
// export class CatsModule {}