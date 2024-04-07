import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { Order } from '../models/order';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  constructor(private httpService: HttpService) { }

  public getAllOrders(): Observable<Order[]> {
    return this.httpService.get<Order[]>('http://localhost:8080/order').pipe(
      map((order) => {
        console.log(order);
        return order as Order[];
      })
    );
  }
}
