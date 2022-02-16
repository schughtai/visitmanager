import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsDefined, IsDate } from 'class-validator';
import { AdditionalInfoDto } from './additional-info.dto';
import { BillingAddressDto } from './billing-address.dto';
import { HeaderAuthDto } from './header-auth.dto';
import { CardInfoDto } from './card-info.dto';

export class PaymentAuthDto
{
    @ApiProperty()
    amount: number; 

    @ApiProperty()
    id: string;  
    
    @ApiProperty()
    idType: string;  

    @IsOptional()
    @ApiPropertyOptional()
    orderOrigin: string;  

    @ApiProperty()
    paymentType: string;  

    @ApiPropertyOptional()
    transactionType: string;  

    @ApiProperty()
    externalOrderId: string;  

    @ApiPropertyOptional({ type: HeaderAuthDto })
    header: HeaderAuthDto;

    @ApiPropertyOptional({ type: CardInfoDto })
    cardInfo: CardInfoDto;

    @ApiPropertyOptional({ type: BillingAddressDto })
    billingAddress:  BillingAddressDto;

    @ApiPropertyOptional({ type: AdditionalInfoDto })
    additionalInfo:  AdditionalInfoDto;
    
}