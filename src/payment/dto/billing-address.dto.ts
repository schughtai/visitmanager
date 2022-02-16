import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BillingAddressDto {
    @ApiProperty()
    name:        string;

    @ApiProperty()
    state:       string;

    @ApiProperty()
    country:     string;

    @ApiProperty()
    addressLine: string;

    @ApiProperty()
    city:        string;

    @ApiProperty()
    zipCode:     string;
}
