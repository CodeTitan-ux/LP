import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
      this.user = JSON.parse(currentUser);
    }
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
