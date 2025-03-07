import { Component } from '@angular/core'
import { cardsData } from '../../../cards/data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'transaction',
  imports: [NgbDropdownModule],
  templateUrl: './transaction.component.html',
  styles: ``,
})
export class TransactionsComponent {
  cardsData = cardsData
}
