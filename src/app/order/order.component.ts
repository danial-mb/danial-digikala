import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  src = '/assets/10.jpg';
  orders;
  constructor(private orderservice: OrderService) {
    this.orders = this.orderservice.getOrder();
  }
}
