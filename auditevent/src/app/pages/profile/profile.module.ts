import { ContainerModule } from './../../shared/components/container/container.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar'
import { ProfileRoutingModule } from './profile-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule, 
    ProfileRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    ContainerModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule
  ]
})
export class ProfileModule { }
