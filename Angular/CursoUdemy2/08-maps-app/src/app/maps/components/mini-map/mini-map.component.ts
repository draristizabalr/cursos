import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

/**
 * width 100%
 * height 260px
 */

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.component.html',
})
export class MiniMapComponent implements AfterViewInit {
  lngLat = input.required<{ lng: number; lat: number }>();
  zoom = input(14);

  constructor() {
    mapboxgl.accessToken = environment.mapboxKey;
  }

  divElement = viewChild<ElementRef>('map');

  async ngAfterViewInit() {
    if (!this.divElement() || !this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 100));

    const element = this.divElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat(),
      zoom: this.zoom(),
      interactive: false,
    });

    new mapboxgl.Marker({ color: 'red' }).setLngLat(this.lngLat()).addTo(map);
  }
}
