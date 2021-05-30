import { AuditEventAddModule } from './../add/auditevent-add.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuditEventCardModule } from './../card/auditevent-card.module';
import { ContainerModule } from './../../../shared/components/container/container.module';
import { AuditEventListRoutingModule } from './auditevent-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditEventListComponent } from './auditevent-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuditEventListComponent],
  imports: [
    CommonModule, AuditEventListRoutingModule, MatToolbarModule, ContainerModule, AuditEventCardModule, MatButtonModule, MatIconModule, AuditEventAddModule,
    MatProgressSpinnerModule, MatAutocompleteModule,FormsModule,ReactiveFormsModule
  ]
})
export class AuditEventListModule { }