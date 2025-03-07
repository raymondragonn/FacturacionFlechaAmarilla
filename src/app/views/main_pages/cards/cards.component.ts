import { Component, inject, TemplateRef } from '@angular/core'
import { PagetitleComponent } from '../../../components/pagetitle/pagetitle.component'
import { cardsData } from './data'
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-cards',
  imports: [PagetitleComponent, NgbDropdownModule],
  templateUrl: './cards.component.html',
  styles: ``,
})
export class CardsComponent {
  cardsData = cardsData
  private modalService = inject(NgbModal)

  open(content: TemplateRef<any>) {
    this.modalService.open(content)
  }
}
