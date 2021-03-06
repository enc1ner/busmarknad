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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PurchaseService = (function () {
    function PurchaseService(_http) {
        this._http = _http;
    }
    PurchaseService.prototype.getPurchases = function () {
        return this._http.get('/api/v1/purchases')
            .map(function (res) { return res.json(); });
    };
    PurchaseService.prototype.savePurchase = function (purchase) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/v1/purchase', JSON.stringify(purchase), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PurchaseService.prototype.deletePurchase = function (id) {
        return this._http.delete('/api/v1/purchase/' + id)
            .map(function (res) { return res.json(); });
    };
    return PurchaseService;
}());
PurchaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PurchaseService);
exports.PurchaseService = PurchaseService;
//# sourceMappingURL=purchase.service.js.map