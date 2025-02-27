import { Product, taxCalculator } from "./06-function-destructuracion";

const shoppingCart: Product[] = [
  {
    description: 'Nokia',
    price: 100
  },
  {
    description: 'iPad',
    price: 150
  }
];

const [ total, tax ] = taxCalculator({ products: shoppingCart, tax: 0.15 });

console.log('total', total);
console.log('tax', tax);
