import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    name: ['Bryan Luis', Validators.required],
    email: ['baluisto96@gmail.com', [Validators.required, Validators.email]],
    password: ['lawliet96', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  registrar() {
console.log(this.miFormulario.value);
  }

}
