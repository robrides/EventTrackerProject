export class Address {

  id: number;
  address: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;

  constructor(
    id?: number,
    address?: string,
    address2?: string,
    city?: string,
    state?: string,
    zipcode?: string
  ) {
    this.id = id;
    this.address = address;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
  }

}
