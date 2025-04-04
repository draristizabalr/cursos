import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(
    private GifsService: GifsService
  ) {}

  get tagHistory() {
    return this.GifsService.tagHistory
  }

  onHandleClick(tag: string){
    this.GifsService.searchTag(tag)
  }
}
