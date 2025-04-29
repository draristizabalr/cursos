import { Component, inject, signal } from '@angular/core';
import { ProductsTableComponent } from "../../../products/components/products-table/products-table.component";
import { ProductsService } from '@products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { PaginatorComponent } from '@shared/components/paginator/paginator.component';
import { PaginatorService } from '@shared/components/paginator/paginator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductsTableComponent, PaginatorComponent],
  templateUrl: './products-admin-page.component.html',
})
export class ProductsAdminPageComponent {
  productsService = inject(ProductsService);
  paginatorService = inject(PaginatorService);

  productsPerPage = signal(5);

  readonly options = [5, 10, 20, 30];

  productsResource = rxResource({
    request: () => ({ page: this.paginatorService.currentPage() - 1, limit: this.productsPerPage() }),
    loader: ({ request }) => this.productsService.getProducts({ offset: request.page * 9, limit: request.limit }),
  })

  onChangeSelection(event: Event) {
    const select = event.target as HTMLSelectElement;
    const value = select.value;

    this.productsPerPage.set(Number(value));
  }
}
