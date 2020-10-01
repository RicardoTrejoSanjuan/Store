import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Products_Ricardo as Product } from './interfaces/product.interface';
import { CreateProductTDO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Products_Ricardo') private readonly productModel: Model<Product>) {}

    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find({Status: true});
        return products;
    }

    async getProduct(productID: string): Promise<Product> {
        const product = await this.productModel.findById(productID);
        return product;
    }

    async createProduct(createProductTDO: CreateProductTDO): Promise<Product> {
        const product = new this.productModel(createProductTDO);
        return await product.save();
    }

    async updateProduct(productID: string, createProductTDO: CreateProductTDO): Promise<Product> {
        const updateProduct = await this.productModel.findByIdAndUpdate(productID, createProductTDO, {new: true});
        return updateProduct;
    }

    async deleteProduct(productID: string): Promise<any> {
        const updateProduct = await this.productModel.findByIdAndUpdate(productID, {Status: false}, {new: true});
        return updateProduct;
        // const deleteProduct = await this.productModel.findByIdAndDelete(productID);
        // return deleteProduct;
    }

}
