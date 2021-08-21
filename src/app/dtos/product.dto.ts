import { IsNotEmpty } from '@webblocksapp/class-validator';

export enum Groups {
  Always = 'Always',
  Create = 'Create',
}

export class ProductDto {
  @IsNotEmpty({ groups: [Groups.Create] })
  id: number;

  @IsNotEmpty({ groups: [Groups.Always] })
  name: string;

  @IsNotEmpty({ groups: [Groups.Always] })
  price: string;

  @IsNotEmpty({ groups: [Groups.Always] })
  location: string;
}
