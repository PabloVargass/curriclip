import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]  // ← para ion-* y [(ngModel)]
})
export class LoginPage {
  email = '';
  password = '';
  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  async submit() {
    this.loading = true; this.error = '';
    try { await this.auth.login(this.email, this.password); this.router.navigateByUrl('/wf'); }
    catch (e:any) { this.error = e?.message || 'Error de autenticación'; }
    finally { this.loading = false; }
  }
}
