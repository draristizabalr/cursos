import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';

// Configuración del locale de la app
import localeEsCO from '@angular/common/locales/es-CO'
import localeFrCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEsCO)
registerLocaleData(localeFrCA)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
