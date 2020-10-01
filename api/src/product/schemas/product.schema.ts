import { Mongoose } from "mongoose";
import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    NameProduct: {
        type: String,
        required: true,
        maxlength: 150
    },
    Category: {
        type: String,
        required: true,
        enum: [
            'Bebidas',
            'Limpieza',
            'Botanas',
            'Cremeria'
        ]
    },
    Description: {
        type: String,
        required: true,
        maxlength: 450
    },
    ProductQuantity: {
        type: Number,
        required: true,
    },
    Status: {
        type: Boolean,
        default: false
    },
    TimeStamp: {
        type: Date,
        default: Date.now()
    }
})