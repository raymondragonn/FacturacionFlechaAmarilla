import { AuthService } from '@/app/servicios/auth.service'
import { login } from '@/app/store/authentication/authentication.actions'
import { Component, OnInit, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  
} from '@angular/forms'
import { Router, RouterLink } from '@angular/router'
import { Store } from '@ngrx/store'
import { AlertsComponent } from '../../ui/alerts/alerts.component'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { AuthenticationService } from '@/app/core/service/auth.service'


@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, ReactiveFormsModule,NgbAlertModule,CommonModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent implements OnInit {
  signInForm!: UntypedFormGroup
  submitted: boolean = false
  private token: string = ''
  showAlert: boolean = false

  constructor(private authServicePrueba: AuthService, private authService: AuthenticationService){

  }

  public fb = inject(UntypedFormBuilder)
  public store = inject(Store)
  private router = inject(Router)

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }

  get formValues() {
    return this.signInForm.controls
  }

  login() {
    this.submitted = true
    if (this.signInForm.valid) {
      const username = this.formValues['username'].value
      const password = this.formValues['password'].value
      this.authService.login( username, password).subscribe((res) => {
        const { token, user } = res as { token: string, user: string };
        localStorage.setItem('currentUser', JSON.stringify({ username: user, token: token}));  
        this.router.navigate(['']);
      },(error) => {
        console.log(error);
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 6000);
      })

      //Login Api
      // this.store.dispatch(login({ email: 'user@example.com', password: 'password123' }));
    }
  }
}
