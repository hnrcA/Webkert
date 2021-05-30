import { FbBaseService } from './../../../services/fb-base.service';
import { AuditEvent } from './../../../shared/models/audit-event';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-auditevent-card',
  templateUrl: './auditevent-card.component.html',
  styleUrls: ['./auditevent-card.component.scss']
})
export class AuditEventCardComponent implements OnInit {
  @Input() auditevent?: AuditEvent;

  constructor(private service: FbBaseService<AuditEvent>){
  }

  ngOnInit(): void {
  }

  delete(): void {
    if(confirm("Biztos hogy szeretnéd törölni ezt az elemet:  "+ this.auditevent!.resourceType)) {
      this.service.delete('auditevents',this.auditevent!.id);
    }
  }
}
