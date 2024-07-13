import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = new FormGroup({
    phon: new FormControl(
      '',
      [Validators.required, Validators.pattern('09173585164')],
      [UsernameValidators.confirmEmail]
    ),
  });
  get phon() {
    return this.form.get('phon');
  }
  constructor(private rout: ActivatedRoute, private router: Router) {}

  submit() {
    if (this.form.valid) {
      this.router.navigate(['/pass']);
    }
  }
}

////[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$ |
