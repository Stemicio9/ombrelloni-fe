export class Order {
  image: string;
  name: string;
  quantity: number;
  price: number;
  removeIcon: string;
  description: string;

  constructor(i?: string, n?: string, q?: number, p?: number, r?: string, d?:string) {
    this.image = i ?? '';
    this.name = n ?? '';
    this.quantity = q ?? 0;
    this.price = p ?? 0.00;
    this.removeIcon = r ?? '';
    this.description = d ?? '';
  }
}
