import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./auth/autn.interceptor";
import {AuthGuard} from "./auth/auth.guard";
import {AuthService} from "./auth/auth.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
