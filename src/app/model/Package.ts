import { Product } from "./Product";

export class Package {
  id: number;
  image: string;
  name: string;
  price: string;
  products: Product[];

  constructor(
    id: number,
    image: string,
    name: string,
    price: string,
    products: Product[]
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.price = price;
    this.products = products;
  }
}
