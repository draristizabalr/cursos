import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LanguageSelectorComponent, TranslateModule],
  templateUrl: './products.component.html',
})
export default class ProductsComponent {
  firstName = signal('David Aristizabal');
}
