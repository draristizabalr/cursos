import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
// import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gif.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';

@Component({
	selector: 'app-trending-page',
	// imports: [GifListComponent],
	templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit {
	gifService = inject(GifService);
	scrollStateService = inject(ScrollStateService);

	scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('scrollDiv');

	ngAfterViewInit(): void {
		const scrollDiv = this.scrollDivRef()?.nativeElement;
		if (!scrollDiv) return;
		
		scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
	}

	onScroll() {
		const scrollDiv = this.scrollDivRef()?.nativeElement;
		if (!scrollDiv) return;

		const { scrollTop, clientHeight, scrollHeight } = scrollDiv;

		this.scrollStateService.trendingScrollState.set(scrollTop);

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

		if (isAtBottom) {
			this.gifService.loadTrendingGifs();
		}
	}
}
