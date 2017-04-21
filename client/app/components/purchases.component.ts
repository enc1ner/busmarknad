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
        });
    }

    next(event, price) {
        price.focus();
    }

    addPurchase(event, seller, price) {
        var purchase = {
            id: null,
            price: price.value,
            seller: seller.value        
        };

        this._purchaseService.savePurchase(purchase)
            .subscribe(x => {
                this.purchases.push(x);
                seller.focus();
            });

        this.clearForm(seller, price);
    }

    clearForm(seller, price) {
        seller.value = '';
        price.value = '';
    }

    deletePurchase(todo) {
        var purchases = this.purchases;
        console.log(todo._id);
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