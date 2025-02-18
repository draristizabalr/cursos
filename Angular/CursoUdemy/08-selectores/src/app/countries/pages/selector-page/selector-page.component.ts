import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  standalone: false,
  templateUrl: './selector-page.component.html',
  styles: ``
})
export class SelectorPageComponent implements OnInit {

  form!: FormGroup;
  countries$!: Observable<SmallCountry[]>;

  constructor( 
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {
    this.form = this.fb.group({
      region: ['', Validators.required],
      country: ['', Validators.required],
      borders: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.onRegionChanged();
  }
  
  onRegionChanged(): void {
    this.countries$ = this.form.get('region')!.valueChanges
      .pipe(
        tap(() => this.form.get('country')!.setValue('')),
        switchMap( region => this.countriesService.getCountriesByRegion(region as Region))
      );    
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }


}
