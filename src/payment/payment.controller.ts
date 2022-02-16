import {
    ApiBearerAuth,
    ApiConsumes,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiTags,
  } from '@nestjs/swagger';
import { 
    Controller, 
    Post, 
    Body, 
    Request 
} from '@nestjs/common';
import {PaymentAuthResponseDto} from './dto/response/payment-auth-response.dto'
import {PaymentAuthDto} from './dto/payment-auth.dto';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  @ApiConsumes('application/x-www-form-urlencoded', 'application/json')
  @ApiCreatedResponse({ type: PaymentAuthResponseDto })
  @Post()
  @ApiOperation({ summary: 'This will perform the auth with WP and validate the AVS, CVV and response checks. Consumers app should read the attribute "isTransactionSuccess" "" and should be true if authorization is success.' })
  async create(@Body() PaymentAuthDto: PaymentAuthDto, @Request() req) {
    var paymentAuth = new PaymentAuthResponseDto();
    return paymentAuth;
  }


}
