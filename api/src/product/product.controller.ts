import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { CreateProductTDO } from './dto/product.dto';
import { ProductService } from './product.service';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
    ApiCreatedResponse
  } from '@nestjs/swagger';
import { Logger, LColor } from 'logger-colors';

const logger = new Logger();
const separador = '----------------------------------------------------';

@ApiBearerAuth()
@ApiTags('product')
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Post('/create')
    @ApiOperation({ summary: 'Create product' })
    @ApiResponse({ status: 400, description: 'Error.'})
    @ApiResponse({ status: 200, description: 'Ok.' })
    async createProduct(@Res() res, @Body() createProductTDO: CreateProductTDO) {
        try {

            logger.cyan('CREATE PRODUCT', true);
            logger.cyan('METHOD:     POST', false);
            logger.cyan('URL:        /product/create', false);
            logger.cyan('BODY:', false);
            logger.success(JSON.stringify(createProductTDO));
            logger.magenta('');
            logger.info(separador);

            const product = await this.productService.createProduct(createProductTDO);

            const respuesta = {
                error: null,
                detail: {
                    message: 'Product Successfully created',
                    product
                }
            };

            logger.magenta('RESPONSE', true);
            logger.magenta(`STATUS: ${LColor.c_green}[200]`, false);
            logger.magenta(`BODY:`, false);
            logger.magenta(JSON.stringify(respuesta), false);
            logger.magenta('');
            logger.info(separador);

            res.status(HttpStatus.OK).json(respuesta);

        } catch (error) {

            const respuesta = {
                error,
                detail: null
            };

            logger.error('RESPONSE ERROR', true);
            logger.error(`STATUS: ${LColor.c_yellow}[400]`, false);
            logger.error(`BODY:`, false);
            logger.error(JSON.stringify(respuesta), false);
            logger.error('');
            logger.info(separador);

            res.status(400).json(respuesta);
        }
    }

    @Get('/')
    @ApiOperation({ summary: 'Get All product' })
    @ApiResponse({ status: 400, description: 'Error.'})
    @ApiResponse({ status: 200, description: 'Ok.' })
    async getAllProducts(@Res() res) {
        try {
            logger.cyan('GET ALL PRODUCTS', true);
            logger.cyan('METHOD:     GET', false);
            logger.cyan('URL:        /product', false);
            logger.magenta('');
            logger.info(separador);

            const products = await this.productService.getProducts();

            const respuesta = {
                error: null,
                detail: {
                    message: 'Getting Products Successfully',
                    products
                }
            };

            logger.magenta('RESPONSE', true);
            logger.magenta(`STATUS: ${LColor.c_green}[200]`, false);
            logger.magenta(`BODY:`, false);
            logger.magenta(JSON.stringify(respuesta), false);
            logger.magenta('');
            logger.info(separador);

            res.status(HttpStatus.OK).json(respuesta);
        } catch (error) {

            const respuesta = {
                error,
                detail: null
            };

            logger.error('RESPONSE ERROR', true);
            logger.error(`STATUS: ${LColor.c_yellow}[400]`, false);
            logger.error(`BODY:`, false);
            logger.error(JSON.stringify(respuesta), false);
            logger.error('');
            logger.info(separador);

            res.status(400).json(respuesta)
        }
    }

    @Get('/:productId')
    @ApiOperation({ summary: 'Get One product' })
    @ApiResponse({ status: 400, description: 'Error.'})
    @ApiResponse({ status: 200, description: 'Ok.' })
    async getOneProduct(@Res() res, @Param('productId') productId) {
        try {

            logger.cyan('GET ONE PRODUCT', true);
            logger.cyan('METHOD:     GET', false);
            const help: string = 'URL:        /product/' + productId;
            logger.cyan(help, false);
            logger.magenta('');
            logger.info(separador);

            const product = await this.productService.getProduct(productId);
            let response: any;

            logger.magenta('RESPONSE', true);
            logger.magenta(`STATUS: ${LColor.c_green}[200]`, false);
            logger.magenta(`BODY:`, false);

            if (!product) {
                response = {
                    message: 'Product does not found',
                    product: []
                };
            } else {
                response = {
                    message: 'Getting Product Successfully',
                    product
                };
            }

            logger.magenta(JSON.stringify(response), false);
            logger.magenta('');
            logger.info(separador);

            res.status(HttpStatus.OK).json(response);

        } catch (error) {

            const respuesta = {
                error,
                detail: null
            };

            logger.error('RESPONSE ERROR', true);
            logger.error(`STATUS: ${LColor.c_yellow}[400]`, false);
            logger.error(`BODY:`, false);
            logger.error(JSON.stringify(respuesta), false);
            logger.error('');
            logger.info(separador);

            res.status(400).json(respuesta);
        }
    }

    @Put('/update/:productId')
    @ApiOperation({ summary: 'Update product' })
    @ApiResponse({ status: 400, description: 'Error.'})
    @ApiResponse({ status: 200, description: 'Ok.' })
    async updateProduct(@Res() res, @Body() createProductTDO: CreateProductTDO, @Param('productId') productId) {
        try {

            logger.cyan('UPDATE PRODUCT', true);
            logger.cyan('METHOD:     PUT', false);
            const help: string = 'URL:        /product/update/' + productId;
            logger.cyan(help, false);
            logger.cyan('BODY:', false);
            logger.success(JSON.stringify(createProductTDO));
            logger.magenta('');
            logger.info(separador);

            const updateProduct = await this.productService.updateProduct(productId, createProductTDO);
            let response: any;

            if (!updateProduct) {
                response = {
                    message: 'Product does not exists',
                    product: []
                };

                logger.magenta('RESPONSE', true);
                logger.magenta(`STATUS: ${LColor.c_green}[400]`, false);
                logger.magenta(`BODY:`, false);
                logger.magenta(JSON.stringify(response), false);
                logger.magenta('');
                logger.info(separador);

                res.status(400).json(response);
            } else {
                response = {
                    message: 'Product has been update',
                    product: updateProduct
                };

                logger.magenta('RESPONSE', true);
                logger.magenta(`STATUS: ${LColor.c_green}[200]`, false);
                logger.magenta(`BODY:`, false);
                logger.magenta(JSON.stringify(response), false);
                logger.magenta('');
                logger.info(separador);

                res.status(HttpStatus.OK).json(response);
            }
        } catch (error) {
            const respuesta = {
                error,
                detail: null
            };

            logger.error('RESPONSE ERROR', true);
            logger.error(`STATUS: ${LColor.c_yellow}[400]`, false);
            logger.error(`BODY:`, false);
            logger.error(JSON.stringify(respuesta), false);
            logger.error('');
            logger.info(separador);

            res.status(400).json(respuesta);
        }

    }

    @Delete('/delete/:productId')
    @ApiOperation({ summary: 'Delete product' })
    @ApiResponse({ status: 400, description: 'Error.'})
    @ApiResponse({ status: 200, description: 'Ok.' })
    async deleteProduct(@Res() res, @Param('productId') productId) {

        try {

            logger.cyan('DELETE PRODUCT', true);
            logger.cyan('METHOD:     DELETE', false);
            const help: string = 'URL:        /product/delete/' + productId;
            logger.cyan(help, false);
            logger.magenta('');
            logger.info(separador);

            const product = await this.productService.deleteProduct(productId);
            let response: any;

            if (!product) {
                response = {
                    message: 'Product does not exists',
                    product: []
                };

                logger.magenta('RESPONSE', true);
                logger.magenta(`STATUS: ${LColor.c_green}[400]`, false);
                logger.magenta(`BODY:`, false);
                logger.magenta(JSON.stringify(response), false);
                logger.magenta('');
                logger.info(separador);

                res.status(400).json(response);
            } else {
                response = {
                    message: 'Product has been delete',
                    product
                };

                logger.magenta('RESPONSE', true);
                logger.magenta(`STATUS: ${LColor.c_green}[200]`, false);
                logger.magenta(`BODY:`, false);
                logger.magenta(JSON.stringify(response), false);
                logger.magenta('');
                logger.info(separador);

                res.status(HttpStatus.OK).json(response);
            }
        } catch (error) {
            const respuesta = {
                error,
                detail: null
            };

            logger.error('RESPONSE ERROR', true);
            logger.error(`STATUS: ${LColor.c_yellow}[400]`, false);
            logger.error(`BODY:`, false);
            logger.error(JSON.stringify(respuesta), false);
            logger.error('');
            logger.info(separador);

            res.status(400).json(respuesta);
        }
    }
}
