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
var PurchasesComponent = (function () {
    function PurchasesComponent(_purchaseService) {
        this._purchaseService = _purchaseService;
        this.name = 'Ingareds Busmarknad';
    }
    PurchasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.purchases = [];
        this._purchaseService.getPurchases()
            .subscribe(function (purchases) {
            _this.purchases = purchases;
        });
    };
    PurchasesComponent.prototype.next = function (event, price) {
        price.focus();
    };
    PurchasesComponent.prototype.addPurchase = function (event, seller, price) {
        var _this = this;
        var result;
        var newPurchase = {
            price: price.value,
            seller: seller.value
        };
        result = this._purchaseService.savePurchase(newPurchase);
        result.subscribe(function (x) {
            _this.purchases.push(newPurchase);
            seller.value = '';
            price.value = '';
            seller.focus();
        });
    };
    PurchasesComponent.prototype.deletePurchase = function (todo) {
        var purchases = this.purchases;
        this._purchaseService.deletePurchase(todo._id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < purchases.length; i++) {
                    var element = purchases[i];
                    if (element._id == todo._id) {
                        purchases.splice(i, 1);
                    }
                }
            }
        });
    };
    return PurchasesComponent;
}());
PurchasesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'purchases',
        templateUrl: 'purchases.component.html'
    }),
    __metadata("design:paramtypes", [purchase_service_1.PurchaseService])
], PurchasesComponent);
exports.PurchasesComponent = PurchasesComponent;
//# sourceMappingURL=purchases.component.js.map