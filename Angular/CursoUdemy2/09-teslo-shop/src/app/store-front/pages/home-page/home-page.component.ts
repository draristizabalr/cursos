import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { PaginatorComponent } from '@shared/components/paginator/paginator.component';
import { PaginatorService } from '../../../shared/components/paginator/paginator.service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, PaginatorComponent],
  templateUrl: './home-page.component.html',
})
export default class HomePageComponent {
  private productsService = inject(ProductsService);
  paginatorService = inject(PaginatorService);

  productsResource = rxResource({
    request: () => ({ page: this.paginatorService.currentPage() - 1 }),
    loader: ({ request }) => {
      return this.productsService.getProducts({
        offset: request.page * 9
      });
    },
  });
}
