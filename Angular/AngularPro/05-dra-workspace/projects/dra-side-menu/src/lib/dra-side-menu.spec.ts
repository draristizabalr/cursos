import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraSideMenu } from './dra-side-menu';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

const testRoutes: Routes = [
  { path: 'home', title: 'Home'},
  { path: 'about', title: 'About'},
]

describe('DraSideMenu', () => {
  let component: DraSideMenu;
  let fixture: ComponentFixture<DraSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraSideMenu],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraSideMenu);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('routes', testRoutes);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signIn when logout is clicked', () => {
    spyOn(component.signIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();

    expect(component.signIn.emit).toHaveBeenCalled();
  });

  it('should call signIn & signOut when logout is clicked', () => {
    spyOn(component.signOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();

    expect(component.signOut.emit).toHaveBeenCalled();
  });

});
