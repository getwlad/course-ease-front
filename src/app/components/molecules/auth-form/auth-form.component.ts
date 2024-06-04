import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  @Output() onSubmit = new EventEmitter<{
    username: string;
    password: string;
  }>();

  @Input() loading = false;
  formSubmitted = false;
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      ),
    ]),
  });

  getFormControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }

  submit() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.loading = true;
      const username = this.form.value.username ?? '';
      const password = this.form.value.password ?? '';
      this.onSubmit.emit({ username, password });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
