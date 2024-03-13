import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User  {
    @Prop({
        type: String,
        required:[true, "userName is required"],
        minlength: 2,
        lowercase: true,
        trim:true,
        unique: true,
    })
    userName: string;
    @Prop({
        type: String,
        required:[true, "Email is required"],
        unique: true,
        lowercase: true,
    })
    email: string;
    @Prop({
        type: String,
        required:true
    })
    password: string;
    @Prop()
    age:number;

}

export const UserSchema = SchemaFactory.createForClass(User);