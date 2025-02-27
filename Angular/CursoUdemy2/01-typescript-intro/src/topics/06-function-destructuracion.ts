export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculator( options: TaxCalculationOptions ): number[] {
  let total = 0;
  const { tax, products } = options;

  products.forEach( product => {
    const { price } = product;
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculator({
  products: shoppingCart,
  tax,
});
