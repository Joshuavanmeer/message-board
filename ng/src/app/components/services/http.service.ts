import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class HttpService {


    private headers: Headers = new Headers({'Content-Type': 'application/json'});


    get(urlPieces: string[], headers?): Observable<any> {
        const url = this.parseUrl(urlPieces);
        return this.http.get(url, headers || this.headers)
            .map(res => res.json())
            .catch((err) => Observable.throw(err.json()));
    }


    post(urlPieces: string[], body, headers?): Observable<any> {
        const url = urlPieces.length > 0 ? this.parseUrl(urlPieces) : urlPieces[0];
        return this.http.post(url, body, headers || this.headers)
            .map(res => res.json())
            .catch((err) => Observable.throw(err.json()));
    }


    private parseUrl(urlPieces: any): string {
        let url = '';
        urlPieces.forEach(piece => {
            url += piece;
        });
        return url;
    }

    constructor(private http: Http) { }

}
