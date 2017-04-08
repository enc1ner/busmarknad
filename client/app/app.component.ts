import { Component } from '@angular/core';
import { PurchaseService } from './services/purchase.service';

@Component({
  moduleId: module.id,
  selector: 'busmarknad-app',
  templateUrl: 'app.component.html',
  providers: [PurchaseService]
})
export class AppComponent { name = 'Ingareds Busmarknad'; }
