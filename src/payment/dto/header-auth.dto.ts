import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class HeaderAuthDto {
    @ApiProperty()
    lineOfBusiness: string;
    @ApiProperty()
    appName:        string;
    @ApiProperty()
    apiKey:         string;
    @ApiProperty()
    channelName:    string;
    @ApiProperty()
    deviceToken:    string;
    @ApiProperty()
    deviceType:     string;
    @ApiProperty()
    responseFormat: string;
    @ApiProperty()
    securityType:   string;
    @ApiProperty()
    source:         string;
    @ApiProperty()
    type:           string;
}
