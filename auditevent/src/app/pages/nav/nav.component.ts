import { Router } from '@angular/router';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  categories = CATEGORIES;

  constructor(private router: Router, private auth: AuthService) { }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('login');
  }

}
