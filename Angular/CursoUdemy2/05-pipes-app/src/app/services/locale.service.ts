import { Injectable, signal } from '@angular/core';

export type Locale = 'es' | 'fr' | 'en';

export function localeValidate(locale: string | null): Locale {
  if (!locale) return 'es';
  const availableLocales = ['es', 'fr', 'en'];

  if (availableLocales.includes(locale)) return locale as Locale;

  return 'es';
}


@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private currentLocale = signal<Locale>('es');

  constructor() {
    const locale = localStorage.getItem('locale');
    this.currentLocale.set(localeValidate(locale));
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: Locale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
