import { AbstractControl } from '@angular/forms'

export function phoneNumberValidator(
  control: AbstractControl // we read the value of the FormControl
): { [key: string]: any } | null {  // we return null if the value should be valid or an obj if not
  const valid = /^\d+$/.test(control.value);
  return valid
    ? null
    : { invalidNumber: {valid: false, value: control.value}};
}
