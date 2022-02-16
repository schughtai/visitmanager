import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AdditionalInfoDto {
    @ApiProperty()
    confirmationCode:    string;

    @ApiProperty()
    CCOFConsent:         boolean;

    @ApiProperty()
    email:               string;

    @ApiProperty()
    appointmentDateTime: string;
}
