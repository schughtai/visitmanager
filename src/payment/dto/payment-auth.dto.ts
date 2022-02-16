import { AdditionalInfoDto } from './additional-info.dto';
import { BillingAddressDto } from './billing-address.dto';
import { HeaderAuthDto } from './header-auth.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CardInfoDto } from './card-info.dto';

export class PaymentAuthDto
{
    @ApiProperty()
    amount: number; 

    @ApiProperty()
    id: string;  
    
    @ApiProperty()
    idType: string;  

    @ApiProperty()
    orderOrigin: string;  

    @ApiProperty()
    paymentType: string;  

    @ApiProperty()
    transactionType: string;  

    @ApiProperty()
    externalOrderId: string;  

    @ApiProperty({ type: HeaderAuthDto })
    header: HeaderAuthDto;

    @ApiProperty({ type: CardInfoDto })
    cardInfo: CardInfoDto;

    @ApiProperty({ type: BillingAddressDto })
    billingAddress:  BillingAddressDto;

    @ApiProperty({ type: AdditionalInfoDto })
    additionalInfo:  AdditionalInfoDto;
    
}