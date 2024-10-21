import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  RouterStateSnapshot,
  GuardResult,
  MaybeAsync,
  Route,
  UrlSegment,
  Router
} from "@angular/router";
import { AuthService } from "../services/auth.service";
import { map, Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate, CanMatch {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  checkAuthStatus(): Observable<boolean> | boolean {
    return this.authService.checkAuthentication()
      .pipe(
        tap( isAuthenticated => console.log('Authenticated', isAuthenticated)),
        tap( isAuthenticated => {
          if (isAuthenticated) this.router.navigate(['./heroes/list'])
        }),
        map( isAuthenticated => !isAuthenticated )
      )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    return this.checkAuthStatus()
  }
  canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {

    return this.checkAuthStatus()
  }

}
