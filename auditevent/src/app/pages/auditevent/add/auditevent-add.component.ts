import { Agent } from './../../../shared/models/audit-event';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';


@Component({
  selector: 'app-auditevent-add',
  templateUrl: './auditevent-add.component.html',
  styleUrls: ['./auditevent-add.component.scss']
})
export class AuditEventAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    resourceType: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    subtype: new FormControl(''),
    action: new FormControl(''),
    period: new FormControl(new Date().toISOString()),
    recorded: new FormControl(new Date().toISOString()),
    outcome: new FormControl(''),
    outcomeDesc: new FormControl(''),
    purposeOfEvent: new FormControl(''),
    agent: new FormControl('', Validators.required),
    source: new FormControl('', Validators.required),
    entity: new FormControl('')
  });
  selected ="Agent Graham";
  constructor(public dialogRef: MatDialogRef<AuditEventAddComponent>,) { }

  

  ngOnInit(): void {
  }

}
