import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch, CanActivate {

  constructor (
    private authService: AuthService,
    private router: Router
  ) {}

  private checkAuthStatus(): Observable<boolean> | boolean {

    return this.authService.checkAuthentication()
      .pipe(
        tap( isAuthenticated => console.log('Authenticated', isAuthenticated)),
        tap( isAuthenticated => {
          if (!isAuthenticated) this.router.navigate(['./auth/login'])
        })
      )


  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // MaybeAsync<GuardResult>
    // console.log('Can Activate')
    // console.log({ route, state })

    // return false

    return this.checkAuthStatus()
  }
  canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    // MaybeAsync<GuardResult>
    // console.log('Can Match')
    // console.log({ route, segments })

    // return false

    return this.checkAuthStatus()
  }
}
