import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Ride } from '../models/ride';

@Injectable({
  providedIn: 'root'
})

export class RideService {

    newRide = new Ride();

    constructor(private http: HttpClient, private outboundRouter: Router) { }

    private baseUrl = 'http://localhost:8080/';
    private url = this.baseUrl + 'api/rides';

    index(): Observable<Ride[]> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
      return this.http.get<Ride[]>(this.url, httpOptions)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('Could not retieve ride list');
          })
        );
    }

    show(id: string): Observable<Ride> {

        return this.http.get<Ride>(this.url + '/' + id)
          .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('Could not retieve ride');
            })
          );
    }

    create(ride: Ride) {
        return this.http.post<Ride>(this.url, ride)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM');
          }
        ));
    }

    update(ride: Ride) {
        return this.http.put<any>(this.url + '/' + ride.id, ride).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('Error during update, Ride Service');
          }
          ));
    }

    destroy(id: number) {
        return this.http.delete(this.url + '/' + id)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('Could not retieve ride list');
          })
        );
    }
  }

