import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorsService implements AsyncValidator {

  constructor() { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email: string = control.value

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {
      console.log({ email })
      if (email === 'fernando@google.com') {
        subscriber.next({ emailTaken: true})
        subscriber.complete()
      }

      subscriber.next(null)
      subscriber.complete()
    })

    return httpCallObservable.pipe(
      delay(2000)
    )
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email: string = control.value

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   )
  // }


}
