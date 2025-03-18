import { Component } from '@angular/core'
import { cardsData } from '../../../cards/data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router';

@Component({
  selector: 'transaction',
  imports: [NgbDropdownModule],
  templateUrl: './transaction.component.html',
  styles: ``,
})
export class TransactionsComponent {
  cardsData = cardsData

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializa tus datos aquí si es necesario
  }

  redirectionToDetail(): void {
    this.router.navigate(['/apps/invoice']); // Ajusta la ruta y el parámetro según tus necesidades
  }
}
