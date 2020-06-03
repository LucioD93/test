export class Country {
  name: string;
  alpha2Code: string;

  constructor(obj?: any) {
    this.name = obj && obj.name ? obj.name : '';
    this.alpha2Code = obj && obj.alpha2Code ? obj.alpha2Code : '';
  }
}
