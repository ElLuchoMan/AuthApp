import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
  miFormulario: FormGroup = this.fb.group({
    name: ['Bryan Luis', Validators.required],
    email: ['baluisto96@gmail.com', [Validators.required, Validators.email]],
    password: ['lawliet96', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  registro() {
    console.log(this.miFormulario.value);
    this.router.navigateByUrl('/dashboard');
  }

}
