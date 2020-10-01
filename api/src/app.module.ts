import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

const conexion = `mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASS}@${process.env.MDB_HOST}/${process.env.MDB_DATABASE}?retryWrites=true&w=majority`;
console.log('conexion :', conexion);

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(conexion, {
    // MongooseModule.forRoot('mongodb+srv://testuser:4APWK5m^CuT8@cluster0.czd5z.mongodb.net/Tienda?retryWrites=true&w=majority', {
    // MongooseModule.forRoot('mongodb+srv://testuser:4APWK5m^CuT8@guiltyspark.qsbai.mongodb.net/RoomieTest?retryWrites=true&w=majority', {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}