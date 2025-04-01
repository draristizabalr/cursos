import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Locale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-base-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './base-page.component.html',
})
export default class BasePageComponent {
  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('david');
  nameUpper = signal('DAVID');
  fullName = signal('dAvID AriSTizABAl');

  customDate = signal( new Date() );

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    })
  });

  changeLocale(locale: Locale) {
    console.log({ locale });
    this.localeService.changeLocale(locale);
  }
}
