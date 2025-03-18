import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-balance',
  imports: [NgbDropdownModule, CommonModule],
  templateUrl: './balance.component.html',
  styles: ``,
})
export class BalanceComponent {
  selectedValue: any
  optionsVisible = false
  placeholder: string
  width: string = ''
  height: string = '40px'
  data = [
    { img: 'assets/images/logos/m-card.png', text: 'xx25' },
    { img: 'assets/images/logos/ame-bank.png', text: 'xx21' },
  ]

  constructor(private router: Router) {
    this.selectedValue = this.data[0]
    this.placeholder = this.data[0]?.text || 'Select an option'
  }

  ngOnInit(): void {
    // Inicializa tus datos aquí si es necesario
  }

  redirectionToNewTransaction(): void {
    this.router.navigate(['/new-transaction']); // Ajusta la ruta según tus necesidades
  }

  redirectionToNewClient(): void {
    this.router.navigate(['/users']); // Ajusta la ruta según tus necesidades
  }

  toggleOptions() {
    this.optionsVisible = !this.optionsVisible
  }

  selectOption(option: any) {
    this.selectedValue = option
    this.placeholder = option.text
    this.optionsVisible = false
  }

  getImageStyle(option: any) {
    return { width: '20px', height: '20px' }
  }
}
