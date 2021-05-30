import { OnHoverModule } from './../../../shared/directives/on-hover/on-hover.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuditEventCardComponent } from './auditevent-card.component';

@NgModule({
  declarations: [AuditEventCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule
  ],
  exports: [AuditEventCardComponent]
})
export class AuditEventCardModule { }
