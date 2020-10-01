import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

const user = process.env.MDB_USER || 'testuser';
const pass = process.env.MDB_PASS || '4APWK5m^CuT8';
const host = process.env.MDB_HOST || 'guiltyspark.qsbai.mongodb.net';
const database = process.env.MDB_DATABASE || 'RoomieTest';
const conexion = `mongodb+srv://${user}:${pass}@${host}/${database}?retryWrites=true&w=majority`;
console.log('conexion :', conexion);

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(conexion, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}