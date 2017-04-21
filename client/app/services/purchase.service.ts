import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PurchaseService {
    constructor(private _http: Http) {
        
    }


    getPurchases() {
        return this._http.get('/api/v1/purchases')
            .map(res => res.json());
    }

    savePurchase(purchase) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/v1/purchase', JSON.stringify(purchase), {headers: headers})
            .map(res => res.json());        
    }

    deletePurchase(id) {
        return this._http.delete('/api/v1/purchase/' + id)
            .map(res => res.json());
    }
}