import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static confirmEmail(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'danialmehrdad44@gmail.com') resolve(null);
        else resolve({ confirmEmail: true });
      }, 3000);
    });
  }
}
