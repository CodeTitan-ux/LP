import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    const userData = JSON.parse(localStorage.getItem(this.email) || '{}');

    if (userData.password === this.password && userData.password) {
      alert('Login successful!');
      sessionStorage.setItem('currentUser', JSON.stringify(userData));
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials!');
    }
  }
}
