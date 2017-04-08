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
}
