import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  title: string;
  @Prop()
  slug: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  appliedDiscount: number;
  @Prop()
  priceAfterDiscount: number;
  @Prop()
  stock: number;
  @Prop()
  Images: string;
  @Prop()
  customPath: string;
  @Prop()
  createdBy: string;
  @Prop()
  updatedBy: string;
  @Prop()
  deletedBy: string;
  @Prop()
  subCategoryId: string;
  @Prop()
  categoryId: string;
  @Prop()
  brandId: string;
  @Prop()
  colors: [string];
  @Prop()
  sizes: [string];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
