import { FormGroup, FormControl } from '@angular/forms';

export function getNetworkForm(): FormGroup {
    return new FormGroup({
        address: new FormControl(),
        type: new FormControl(),
    });
}