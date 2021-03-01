import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from "sweetalert2";


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
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  registro() {
    console.log(this.miFormulario.value);
    const {name, email, password } = this.miFormulario.value;
    this.authService.registro( name,email,password).subscribe(ok => {
      // console.log(valido);
      if (ok === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
       Swal.fire('Error',ok,'error');
      }
    });
  }

}
