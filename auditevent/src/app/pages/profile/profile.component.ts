import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { getAgentForm } from 'src/app/shared/forms/agent.form';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup | null = null;
  constructor() { }

  ngOnInit(): void {
    //this.initForm();
  }

  /*initForm(): void {
    this.form = getAgentForm();
    const idFormArray = this.form.get('identifier') as FormArray;
    (idFormArray.get([1]) as FormGroup).controls.value.setValue('laki@webkert.com');
  }*/

}
