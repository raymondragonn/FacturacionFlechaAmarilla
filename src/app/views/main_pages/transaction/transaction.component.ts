import { Component } from '@angular/core'
import { PagetitleComponent } from '../../../components/pagetitle/pagetitle.component'
import { BalanceComponent } from './components/balance/balance.component'
import { StatsComponent } from './components/stats/stats.component'
import { TransactionsComponent } from './components/transaction/transaction.component'

@Component({
  selector: 'app-transaction',
  imports: [
    PagetitleComponent,
    BalanceComponent,
    StatsComponent,
    TransactionsComponent,
  ],
  templateUrl: './transaction.component.html',
  styles: ``,
})
export class TransactionComponent {}
