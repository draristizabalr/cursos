import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {
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

    return this.http.get<Product>(url)
      .pipe(
        tap((response) => console.log(response)),
        tap((response) => this.productCache.set(idSlug, response))
      );
  }
}
