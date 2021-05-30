import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { getNetworkForm } from './network.form';


export function getAgentForm(): FormGroup {
    return new FormGroup({
        altId: new FormControl(),
        name: new FormControl(),
        network: new FormArray([
            getNetworkForm()
        ])
    });
}