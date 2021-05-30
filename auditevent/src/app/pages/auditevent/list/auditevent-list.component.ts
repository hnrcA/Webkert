import { AuditEventAddComponent } from './../add/auditevent-add.component';
import { AuditEvent } from './../../../shared/models/audit-event';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { FbBaseService } from './../../../services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-auditevent-list',
  templateUrl: './auditevent-list.component.html',
  styleUrls: ['./auditevent-list.component.scss']
})
export class AuditEventListComponent implements OnInit {
  title = 'Events';
  list$: Observable<AuditEvent[]> | null = null;


  errorObject = null;

  constructor(private service: FbBaseService<AuditEvent>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('auditevents').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(AuditEventAddComponent, {});
    dialogRef.afterClosed().subscribe((auditevent: AuditEvent) => {
      console.log(auditevent);
      if (auditevent?.resourceType) {
        this.service.add('auditevents', auditevent).then(id => { console.log(id); });
      }
    }, err => {
      console.warn(err);
    });
  }
}
