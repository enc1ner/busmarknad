import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '.././services/purchase.service';
import { Purchase } from '../Purchase';

@Component({
    moduleId: module.id,
    selector: 'sellers',
    templateUrl: 'sellers.component.html'
})
export class SellersComponent implements OnInit {
    orderedPurchases: Purchase[];
    name = 'Ingareds Busmarknad';

    constructor(private _purchaseService: PurchaseService) {

    }


    ngOnInit() {
        this.orderedPurchases = [];
        let tmpPurchases = [];
        this._purchaseService.getPurchases()
            .subscribe(purchases => {
                tmpPurchases = purchases
                    .sort(function (a, b) {
                        return a.seller - b.seller;
                    });
                    this.setPurchases(tmpPurchases);
            });
    }

    setPurchases(purchases: Purchase[]) {
        let sum = 0;
        for (var i = 0; i < purchases.length; i++) {
            console.log(i);
            if(purchases[i + 1] != undefined) {
                if (i == 0 || purchases[i + 1].seller === purchases[i].seller) {
                    sum += +purchases[i].price;
                    console.log(purchases[i].price);
                    console.log("sum: " + sum);
                } else {
                    if(purchases[i].seller === purchases[i - 1].seller && purchases[i].seller !== purchases[i + 1].seller) {
                        //todo: red ut det här med addition av priser
                        sum += +purchases[i].price;
                        let purchase = {
                            id: purchases[i].id,
                            seller: purchases[i].seller,
                            price: sum
                        }
                        this.orderedPurchases.push(purchase);
                    } else {
                        this.orderedPurchases.push(purchases[i]);
                    }
                }
            }
        }
    }
}