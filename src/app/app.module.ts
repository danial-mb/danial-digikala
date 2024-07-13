import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PassComponent } from './pass/pass.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order.service';
import { RouterModule } from '@angular/router';
import { TozihatComponent } from './tozihat/tozihat.component';
import { DataorderComponent } from './dataorder/dataorder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './login/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PassComponent,
    OrderComponent,
    TozihatComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,

    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
      },
      { path: 'tozihat', component: TozihatComponent },
      { path: 'dataorder', component: DataorderComponent },
      { path: 'order', component: OrderComponent },
    ]),
  ],
  providers: [OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
