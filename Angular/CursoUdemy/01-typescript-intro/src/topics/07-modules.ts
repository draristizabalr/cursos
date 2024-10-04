import { Product, taxCalculation, tax } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    },
]

const [ total, taxValue ] = taxCalculation({products: shoppingCart, tax });

console.log('Total', total)
console.log('Tax', taxValue)