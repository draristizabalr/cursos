import {
  AfterViewInit,
  Component,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import mapboxgl, { LngLat, LngLatLike } from 'mapbox-gl';
import { environment } from '../../../environments/environment.development';
import { v4 as UUIDv4 } from 'uuid';
import { DecimalPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker;
}

@Component({
  selector: 'app-markers-page',
  imports: [DecimalPipe],
  templateUrl: './markers-page.component.html',
})
export class MarkersPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map | null>(null);
  markers = signal<Marker[]>([]);

  async ngAfterViewInit() {
    if (!this.divElement() || !this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-122.40985, 37.793085], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map) {
    map.on('click', (event) => this.mapClick(event));

    this.map.set(map);
  }

  mapClick(event: mapboxgl.MapMouseEvent) {

    if (this.markerExist(event.lngLat)) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16),
    );

    const mark = new mapboxgl.Marker({
      color: color,
    })
      .setLngLat(event.lngLat)
      .addTo(this.map()!);

    const newMarker: Marker = {
      id: UUIDv4(),
      mapboxMarker: mark,
    };

    this.markers.update((markers) => [newMarker, ...markers]);
  }

  markerExist(lngLat: LngLat) {
    const markersLngLat = this.markers().map((marker) =>
      marker.mapboxMarker.getLngLat(),
    );
    let markerExist = false;

    markersLngLat.forEach((marker) => {
      if (
        (marker['lat'] - lngLat['lat']) < 0.0001 &&
        marker['lng'] - lngLat['lng'] < 0.0001
      )
        markerExist = true;
    });

    return markerExist;
  }

  flyToMarker(lngLat: LngLatLike) {
    if (!this.map) return;

    this.map()?.flyTo({
      center: lngLat,
    });
  }

  deleteMarker(markerDelete: Marker) {
    if (!this.map) return;

    const map = this.map()!;

    markerDelete.mapboxMarker.remove();

    this.markers.update((markers) =>
      markers.filter((marker) => marker.id !== markerDelete.id),
    );
  }
}
