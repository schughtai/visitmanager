import { Injectable } from '@nestjs/common';
import { HeaderResponseDto } from 'src/payment/dto/header-response.dto';
import {PaymentAuthResponseDto} from 'src/payment/dto/response/payment-auth-response.dto'

@Injectable()
export class AuthService {
    PaymentAuth(): PaymentAuthResponseDto{
        var paymentAuth = new PaymentAuthResponseDto();
        paymentAuth.header = new HeaderResponseDto();
        paymentAuth.header.statusCode = "0000";
        paymentAuth.header.statusDesc = "SUCCESS";

        return paymentAuth;
    }
}
