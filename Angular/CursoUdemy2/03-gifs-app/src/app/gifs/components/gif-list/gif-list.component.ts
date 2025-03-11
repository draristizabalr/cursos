import { Component } from '@angular/core';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  gifs = [
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
    },
    {
      src:"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
    },    
  ]
}
