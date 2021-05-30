import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  });
  alertMessage = '';
  alertsList: any = {
    user: () => 'Hibás E-mail cím vagy jelszó.',
    server: () => 'Ne most, elfáradt a szolgáltatás!',
    false: () => ''
  };

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.login();
  }

  constructor(private router: Router, private auth: AuthService ) { }

  ngOnInit():void {
    this.auth.logout();
  }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  login(): void {
    if (this.form.invalid) {
      return;
    }
    this.auth.login(this.form.value.email, this.form.value.password).then(
      result => {
        console.log(result);
        this.navTo('/home');
      },
      (error) => {
        this.alertMessage = (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
          ? this.alertsList.user() : this.alertsList.server();
      }
    );
  }
}