import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Bluetooth Speaker',
        description: 'Portable with excellent sound.',
        price: '1000',
        imageUrl: 'image/speaker.jpg',
      },
      {
        id: 1,
        name: 'Bluetooth Speaker',
        description: 'Portable with excellent sound.',
        price: '1000',
        imageUrl: 'image/speaker.jpg',
      },
      {
        id: 1,
        name: 'Bluetooth Speaker',
        description: 'Portable with excellent sound.',
        price: '1000',
        imageUrl: 'image/speaker.jpg',
      },
      {
        id: 1,
        name: 'Bluetooth Speaker',
        description: 'Portable with excellent sound.',
        price: '1000',
        imageUrl: 'image/speaker.jpg',
      },
      {
        id: 1,
        name: 'Bluetooth Speaker',
        description: 'Portable with excellent sound.',
        price: '1000',
        imageUrl: 'image/speaker.jpg',
      },
      {
        id: 1,
        name: 'Bluetooth Speaker',
        description: 'Portable with excellent sound.',
        price: '1000',
        imageUrl: 'image/speaker.jpg',
      },
      {
        id: 1,
        name: 'Bluetooth Speaker',
        description: 'Portable with excellent sound.',
        price: '1000',
        imageUrl: 'image/speaker.jpg',
      },
      {
        id: 1,
        name: 'Bluetooth Speaker',
        description: 'Portable with excellent sound.',
        price: '1000',
        imageUrl: 'image/speaker.jpg',
      },
      {
        id: 1,
        name: 'Bluetooth Speaker',
        description: 'Portable with excellent sound.',
        price: '1000',
        imageUrl: 'image/speaker.jpg',
      },
      {
        id: 1,
        name: 'Bluetooth Speaker',
        description: 'Portable with excellent sound.',
        price: '1000',
        imageUrl: 'image/speaker.jpg',
      },

 
 
    ];
  }
}
