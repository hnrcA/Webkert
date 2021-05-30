import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(8), Validators.required]),
    password2: new FormControl('', [Validators.minLength(8), Validators.required]),
  });


  error = false;
  constructor(private router: Router, private auth: AuthService) { }

  registration(): void {
    this.error = false;
    if (this.form.valid) {
      if (this.form.value.password1 === this.form.value.password2) {
        this.auth.registration(this.form.value.email, this.form.value.password1).then(
          result => {
            console.log(result);
            this.router.navigateByUrl('/login');
          },
        );
        return;
      }
    }
    this.error = true;
  }
}