import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({
    type:String, 
    required:true,
    minlength:2,
    maxlength:100
  })
  title: string;
  @Prop({
    required:true,
    type:Number
  })
  price: number;
  @Prop({
    type:Number
  })
  stock: number;
  @Prop()
  Images: [string];
  @Prop()
  customPath: string;
  @Prop({

  })
  createdBy: string;
  @Prop()
  categoryId: string;
  @Prop()
  sizes: [string];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
