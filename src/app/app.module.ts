import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { EntityRepositoryService } from './services/entity-repository.service';
import { AuthService } from './services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginGuardService } from './services/login-guard.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertifyService } from './services/alertify.service';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, RegisterComponent],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule ,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    EntityRepositoryService,
    AuthService,
    LoginGuardService,
    AlertifyService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
