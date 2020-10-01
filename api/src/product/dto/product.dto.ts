import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiProperty,
    ApiTags
  } from '@nestjs/swagger';
import { isString } from 'util';

export class CreateProductTDO {
    @ApiProperty()
    readonly NameProduct:       string;
    @ApiProperty()
    readonly Category:          string;
    @ApiProperty()
    readonly Description:       string;
    @ApiProperty()
    readonly ProductQuantity:   number;
    @ApiProperty()
    readonly Status:            boolean;
    @ApiProperty()
    readonly TimeStamp:         Date;
}