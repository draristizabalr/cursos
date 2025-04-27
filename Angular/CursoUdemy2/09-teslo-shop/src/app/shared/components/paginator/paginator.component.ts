import { Component, computed, inject, input, linkedSignal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paginator',
  imports: [RouterLink],
  templateUrl: './paginator.component.html',
})
export class PaginatorComponent {
  pages = input<number>(0);
  currentPage = input<number>(1);

  activePage = linkedSignal(this.currentPage);

  getPagesList = computed(() => {
    return Array.from({ length: this.pages() }, (_, i) => i + 1);
  })
}
