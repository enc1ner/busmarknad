"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var purchase_service_1 = require(".././services/purchase.service");
var SellersComponent = (function () {
    function SellersComponent(_purchaseService) {
        this._purchaseService = _purchaseService;
        this.name = 'Ingareds Busmarknad';
    }
    SellersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderedPurchases = [];
        var tmpPurchases = [];
        this._purchaseService.getPurchases()
            .subscribe(function (purchases) {
            tmpPurchases = purchases
                .sort(function (a, b) {
                return a.seller - b.seller;
            });
            _this.setPurchases(tmpPurchases);
        });
    };
    SellersComponent.prototype.setPurchases = function (purchases) {
        var sum = 0;
        for (var i = 0; i < purchases.length; i++) {
            console.log(i);
            if (purchases[i + 1] != undefined) {
                if (i == 0 || purchases[i + 1].seller === purchases[i].seller) {
                    sum += +purchases[i].price;
                    console.log(purchases[i].price);
                    console.log("sum: " + sum);
                }
                else {
                    if (purchases[i].seller === purchases[i - 1].seller && purchases[i].seller !== purchases[i + 1].seller) {
                        //todo: red ut det här med addition av priser
                        sum += +purchases[i].price;
                        var purchase = {
                            id: purchases[i].id,
                            seller: purchases[i].seller,
                            price: sum
                        };
                        this.orderedPurchases.push(purchase);
                    }
                    else {
                        this.orderedPurchases.push(purchases[i]);
                    }
                }
            }
        }
    };
    return SellersComponent;
}());
SellersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sellers',
        templateUrl: 'sellers.component.html'
    }),
    __metadata("design:paramtypes", [purchase_service_1.PurchaseService])
], SellersComponent);
exports.SellersComponent = SellersComponent;
//# sourceMappingURL=sellers.component.js.map