import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let fixture: ComponentFixture<App>,
    compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should be 3', () => {
  //   const num1 = 1;
  //   const num2 = 2;
  //   const result = num1 + num2;

  //   expect(result).toBe(3);
  // })

  it('should render router-outlet', () => {
    expect( compiled.querySelector('router-outlet')).not.toBeNull();
  });

  it('should render router-outlet wrapped with css classes', () => {
    const divElement = compiled.querySelector('div');

    const mustHaveClasses = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(' ');

    expect(divElement).not.toBeNull();

    // divElement?.classList.forEach( className => {
    //   expect(mustHaveClasses).toContain(className)
    // });
    const divClasses = divElement?.classList.value.split(' ');

    mustHaveClasses.forEach(className => {
      expect(divClasses).toContain(className)
    });

  });

  it("should contain the 'Buy me a beer' link ", () => {
    const anchorElement = compiled.querySelector('a');

    expect(anchorElement).not.toBeNull();

    const title = 'Buy me a beer';
    const hrefValue = 'https://www.buymeacoffee.com/scottwindon';

    expect(anchorElement?.title).toBe(title);

    expect(anchorElement?.href).toBe(hrefValue);

    expect(anchorElement?.getAttribute('href')).toBe(hrefValue);
  });
});
