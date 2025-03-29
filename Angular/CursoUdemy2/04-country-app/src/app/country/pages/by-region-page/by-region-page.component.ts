import { Component, inject, linkedSignal } from '@angular/core';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { Region } from '../../interfaces/region.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam( queryParam: string): Region | null {
  const queryParamLowerCase = queryParam.toLowerCase();

  const validRegions: Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Antarctic'
  };

  return validRegions[queryParam] || null;
}

@Component({
  selector: 'app-by-region-page',
  imports: [CountryTableComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  countryService = inject(CountryService);
  activatedRouter = inject(ActivatedRoute);
  router = inject(Router);

  queryParams = this.activatedRouter.snapshot.queryParamMap.get('region') ?? '';
  selectedRegion = linkedSignal<Region | null>(() => validateQueryParam(this.queryParams));

  public readonly regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  countriesResource = rxResource({
    request: () => ({ region: this.selectedRegion() }),
    loader: ({ request }) => {
      if (!request.region) {
        this.router.navigate(['/country', 'by-region']);
        return of([]);
      }

      this.router.navigate(['/country', 'by-region'], {
        queryParams: { region: request.region }
      });
      return this.countryService.searchCountriesByRegion(request.region)
    }
  })

  activeBtn(region: Region) {
    if(region === this.selectedRegion()) {
      return 'btn-primary'
    }
    return '';
  }
}
