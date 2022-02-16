import { BillingAddressDto } from './../billing-address.dto';
import { PaymentCardInfoResponseDto } from './payment-card-info-response.dto';
export class PaymentAuthDetailsDto {

    cardInfo:             PaymentCardInfoResponseDto;
    orderId:              string;
    errorMessage:         string;
    id:                   string;
    billingAddress:       BillingAddressDto;
    isTransactionSuccess: boolean;
    statusCode:           string;
}
