import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PurchaseService {
    constructor(private _http: Http) {
        
    }

    getPurchases() {
        return this._http.get('/api/v1/purchases')
            .map(res => res.json());
    }
}