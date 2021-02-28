import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['baluisto96@gmail.com', [Validators.required, Validators.email]],
    password: ['lawliet96', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.miFormulario.value)
    this.router.navigateByUrl('/dashboard');
  }
}
