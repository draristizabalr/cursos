import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-contries.inteface";

export class CountryMapper {
  static mapRestCountryToCountry(response: RESTCountry): Country {
    return {
      cca2: response.cca2,
      flag: response.flag,
      flagSvg: response.flags.svg,
      name: response.translations['spa'].common ?? response.name.common,
      capital: response.capital.join(', '),
      population: response.population,
      maps: response.maps.googleMaps,
      timezones: response.timezones,
      languages: response.languages,
    }
  }

  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map( this.mapRestCountryToCountry );
  }
}
