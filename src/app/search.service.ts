import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()

export class SearchService {

    constructor(private http: HttpClient) { }

    getCountryList(name: string): Observable<any> {

        return this.http.get<any>(`https://restcountries.eu/rest/v2/name/${name}`)
            .map(response => {
                return response.map(r => {
                    return { name: r.name, capital: r.capital, flag: r.flag };
                })

            }

            )
    }

}