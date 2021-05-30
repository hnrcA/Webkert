import { AuditEventListComponent } from './auditevent-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AuditEventListComponent,
        data: { title: 'Listing - AuditEvent' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuditEventListRoutingModule { }