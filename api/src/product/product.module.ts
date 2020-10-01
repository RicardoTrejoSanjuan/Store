import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Products_Ricardo', schema: ProductSchema},
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
