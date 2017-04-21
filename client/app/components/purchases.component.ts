import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '.././services/purchase.service';
import { Purchase } from '../Purchase';

@Component({
  moduleId: module.id,
  selector: 'purchases',
  templateUrl: 'purchases.component.html'
})
export class PurchasesComponent implements OnInit {
    purchases: Purchase[];
    name = 'Ingareds Busmarknad'; 
    
    constructor(private _purchaseService: PurchaseService) {

    }

    ngOnInit() {
        this.purchases = [];
        this._purchaseService.getPurchases()
            .subscribe(purchases => {
                this.purchases = purchases;
        })
    }

    next(event, price) {
        price.focus();
    }

    addPurchase(event, seller, price) {
        var result;
        var newPurchase = {
            price: price.value,
            seller: seller.value        
        };
        result = this._purchaseService.savePurchase(newPurchase);
        result.subscribe(x => {
            this.purchases.push(newPurchase);
            seller.value = '';
            price.value = '';
            seller.focus();
        });
    }

    deletePurchase(todo) {
        var purchases = this.purchases;

        this._purchaseService.deletePurchase(todo._id)
            .subscribe(data => {
                if(data.n == 1) {
                    for (var i = 0; i < purchases.length; i++) {
                        var element = purchases[i];
                        if (element._id == todo._id) {
                            purchases.splice(i, 1);
                        }
                    }
                }
            });
    }
}