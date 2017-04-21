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

        });
    }
    
    setEditState(purchase, state) {
        if(state) {
            purchase.isEditMode = state;
        } else {
            delete purchase.isEditMode;
        }
    }
    editPurchase(event, purchase) {
        console.log(purchase);
    }
}
