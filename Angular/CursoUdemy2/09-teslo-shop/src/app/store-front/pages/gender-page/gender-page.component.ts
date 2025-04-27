import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from '../../../products/services/products.service';
import { ProductCardComponent } from '../../../products/components/product-card/product-card.component';
import { PaginatorService } from '@shared/components/paginator/paginator.service';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent, PaginatorComponent],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  router = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  paginatorService = inject(PaginatorService);

  gender = toSignal(this.router.params.pipe(map(({ gender }) => gender)));

  productsResource = rxResource({
    request: () => ({
      gender: this.gender(),
      page: this.paginatorService.currentPage() - 1,
    }),
    loader: ({ request }) =>
      this.productsService.getProducts({
        gender: request.gender,
        offset: request.page * 9,
      }),
  });
}
