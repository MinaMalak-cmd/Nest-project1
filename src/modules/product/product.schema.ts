import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  title: string;
  @Prop()
  price: number;
  @Prop()
  stock: number;
  @Prop()
  Images: string;
  @Prop()
  customPath: string;
  @Prop()
  createdBy: string;
  @Prop()
  categoryId: string;
  @Prop()
  sizes: [string];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
