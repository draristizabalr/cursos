import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
})
export class LanguageSelectorComponent {
  // Injects
  languageService = inject(LanguageService);

  // Signals
  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  currentLang = this.languageService.currentLang;

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;

    this.languageService.changeLang(lang);
  }
}
