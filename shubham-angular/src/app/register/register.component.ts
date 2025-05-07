import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    localStorage.setItem(this.email, JSON.stringify(user));
    alert('Registration successful! Please login.');
    this.router.navigate(['/']);
  }
}
