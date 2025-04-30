import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '@auth/interfaces/user.interface';
import { environment } from '@environments/environment';
import {
  Gender,
  Product,
  ProductsResponse,
} from '@products/interfaces/product.interface';
import { Observable, of, tap } from 'rxjs';

const baseUrl = environment.url;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

const emptyProduct: Product = {
  id: 'new',
  title: '',
  price: 0,
  description: '',
  slug: '',
  stock: 0,
  sizes: [],
  gender: Gender.Men,
  tags: [],
  images: [],
  user: {} as User,
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  private productsCache = new Map<string, ProductsResponse>();
  private productCache = new Map<string, Product>();

  getProducts(options: Options): Observable<ProductsResponse> {
    const url = `${baseUrl}/products`;
    const { limit = 9, offset = 0, gender = '' } = options;

    const key = `${limit}-${offset}-${gender}`;

    if (this.productsCache.has(key)) {
      return of(this.productsCache.get(key)!);
    }

    return this.http
      .get<ProductsResponse>(`${url}`, {
        params: {
          limit,
          offset,
          gender,
        },
      })
      .pipe(
        tap((response) => console.log(response)),
        tap((response) => this.productsCache.set(key, response)),
      );
  }

  getProductByIdSlug(idSlug: string): Observable<Product> {
    const url = `${baseUrl}/products/${idSlug}`;

    if (this.productCache.get(idSlug)) {
      return of(this.productCache.get(idSlug)!);
    }

    return this.http.get<Product>(url).pipe(
      tap((response) => console.log(response)),
      tap((response) => this.productCache.set(idSlug, response)),
    );
  }
  getProductById(id: string): Observable<Product> {
    if (id === 'new') return of(emptyProduct);

    const url = `${baseUrl}/products/${id}`;

    if (this.productCache.get(id)) {
      return of(this.productCache.get(id)!);
    }

    return this.http.get<Product>(url).pipe(
      tap((response) => console.log(response)),
      tap((response) => this.productCache.set(id, response)),
    );
  }

  updateProduct(
    id: string,
    productLike: Partial<Product>,
  ): Observable<Product> {
    const url = `${baseUrl}/products/${id}`;

    return this.http
      .patch<Product>(url, productLike)
      .pipe(tap((product) => this.updateProductCache(id, product)));
  }

  createProduct(productLike: Partial<Product>): Observable<Product> {
    const url = `${baseUrl}/products`;

    return this.http
      .post<Product>(url, productLike)
      .pipe(tap((product) => this.updateProductCache(product.id, product)));
  }

  updateProductCache(id: string, product: Product) {
    const isNewProduct = !this.productCache.has(id);

    this.productCache.set(id, product);

    if (isNewProduct) {
      this.productsCache = new Map();
    } else {
      this.productsCache.forEach((productResponse) => {
        productResponse.products = productResponse.products.map(
          (currProduct) => (currProduct.id === id ? product : currProduct),
        );
      });
    }
  }
}
