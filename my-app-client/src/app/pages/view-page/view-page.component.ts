import { Component, OnDestroy, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table'
import { Order } from '../../models/order';
import { Subject, takeUntil, tap } from 'rxjs';
import { OrderService } from '../../service/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-page',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './view-page.component.html',
  styleUrl: './view-page.component.scss',
})
export class ViewPageComponent implements OnInit, OnDestroy {
  public viewColumns = [
    { field: 'orderId', header: 'Id', enableSort: true },
    { field: 'name', header: 'Name', enableSort: true },
    { field: 'quantity', header: 'Quantity (in Kgs)', enableSort: true },
  ];

  public orderData: Order[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().pipe(
      takeUntil(this.unsubscribe$),
      tap((order) => {
        if (order) {
          this.orderData = order;
        }
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
  }
}
