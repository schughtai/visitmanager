import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CardInfoDto
{
    @ApiProperty()
    cardType:              string;

    @ApiProperty()
    paypageRegistrationId: string;

    @ApiProperty()
    cardValidationNum:     string;

    @ApiProperty()
    isToken:               boolean;
    
    @ApiProperty()
    tokenType:             string;

    @ApiProperty()
    expDate:               string;

    @ApiProperty()
    fsaCard:               boolean;

    @ApiProperty()
    accountRangeId:        string;

    @ApiProperty()
    bin:                   string;
}