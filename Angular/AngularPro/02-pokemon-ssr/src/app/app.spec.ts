import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from './app';
import { Navbar } from '@shared/components/navbar/navbar';

@Component({
  selector: 'app-navbar',
  template: `<h1>Navbar component mock</h1>`
})
class NavBarMock {}

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let app: App;
  let compiled: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()],
    }).overrideComponent(App, {
      add: { imports: [NavBarMock] },
      remove: { imports: [Navbar] },
    });

    fixture = TestBed.createComponent(App);
    app = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render the navbar and router-outlet', () => {
    const routerOutletContent = compiled.querySelector('div') as HTMLDivElement;

    expect(compiled.querySelector('app-navbar')).toBeTruthy();
    expect(routerOutletContent.querySelector('router-outlet')).toBeTruthy();
  });
});
