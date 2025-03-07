import { Component } from '@angular/core'
import { PagetitleComponent } from '../../../components/pagetitle/pagetitle.component'
import { UppyService } from '@/app/core/service/uppy.service'
import Uppy from '@uppy/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-add-transaction',
  imports: [PagetitleComponent, CommonModule],
  templateUrl: './add-transaction.component.html',
  styles: ``,
})
export class AddTransactionComponent {
  private uppyInstance!: Uppy
  imageUrl: string | ArrayBuffer | null = null

  private uuid: string = 'unique-id'

  selectedValue: any
  optionsVisible = false
  placeholder: string
  width: string = ''
  height: string = '40px'
  data = [
    { img: 'assets/images/logos/m-card.png', text: 'xx25' },
    { img: 'assets/images/logos/ame-bank.png', text: 'xx21' },
  ]
  constructor(private uppyService: UppyService) {
    this.selectedValue = this.data[0]
    this.placeholder = this.data[0]?.text || 'Select an option'
  }

  ngOnInit(): void {
    const pluginConfig: [string, any][] = [
      [
        'Dashboard',
        {
          inline: true,
          target: '#drag-drop-area',
        },
      ],
      ['Tus', { endpoint: 'https://tusd.tusdemo.net/files/' }],
    ]

    this.uppyInstance = this.uppyService.configure(pluginConfig, this.uuid)
  }

  ngOnDestroy(): void {
    if (this.uppyInstance) {
      this.uppyInstance.close()
    }
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
