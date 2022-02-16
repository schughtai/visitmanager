import { PaymentAuthDetailsDto } from './payment-auth-details.dto';
import { HeaderResponseDto } from './../header-response.dto';
export class PaymentAuthResponseDto {
    header:  HeaderResponseDto;
    details: PaymentAuthDetailsDto;
}
