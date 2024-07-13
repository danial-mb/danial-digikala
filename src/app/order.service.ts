import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}
  getOrder() {
    var order = [
      {
        name: 'رب',
        number: 1,
        price: '15000',
        rate: '3',
        picture: '/assets/10.jpg',
      },
      {
        name: 'رب',
        number: 1,
        price: '15000',
        rate: '2',
        picture: '/assets/1.jpeg',
      },
      {
        name: 'رب',
        number: 3,
        price: '15000',
        rate: '3',
        picture: '/assets/2.jpg',
      },
      {
        name: 'رب',
        number: 4,
        price: '15000',
        rate: '3',
        picture: '/assets/3.jpg',
      },
      {
        name: 'رب',
        number: 5,
        price: '15000',
        rate: '3',
        picture: '/assets/4.jpeg',
      },
      {
        name: 'رب',
        number: 6,
        price: '15000',
        rate: '3',
        picture: '/assets/5.jpg',
      },
      {
        name: 'رب',
        number: 7,
        price: '15000',
        rate: '3',
        picture: '/assets/6.jpg',
      },
      {
        name: 'رب',
        number: 8,
        price: '15000',
        rate: '3',
        picture: '/assets/7.jpeg',
      },
      {
        name: 'رب',
        number: 9,
        price: '15000',
        rate: '3',
        picture: '/assets/8.jpeg',
      },
      {
        name: 'رب',
        number: 10,
        price: '15000',
        rate: '3',
        picture: '/assets/9.jpg',
      },
    ];
    return order;
  }
}
