import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [DecimalPipe],
  templateUrl: './fullscreen-map-page.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }

    #controls {
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 25px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
      width: 250px;
    }
  `
})
export class FullscreenMapPageComponent implements AfterViewInit {
  constructor() {
    mapboxgl.accessToken = environment.mapboxKey;
  }

  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map | null>(null);
  zoom = signal(14);
  zoomEnds = signal(14);
  coordinates = signal({
    lng: -74.5,
    lat: 40
  });

  zoomEffect = effect(() => {
    if (!this.map()) return;

    // this.map()?.zoomTo(this.zoom());
    this.map()?.setZoom(this.zoomEnds());

  })

  async ngAfterViewInit() {
    if (!this.divElement() || !this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;

    const { lat, lng } = this.coordinates();

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: this.zoomEnds(), // starting zoom
    });


    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map) {
    map.on('zoom', (event) => {
      const zooming = event.target.getZoom();
      this.zoom.set(zooming);
    })

    map.on('zoomend', (event) => {
      const newZoom = event.target.getZoom();
      this.zoomEnds.set(newZoom);
    })

    map.on('move', () => {
      const center = map.getCenter();

      this.coordinates.set(center);
    })

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());

    this.map.set(map);
  }
}
