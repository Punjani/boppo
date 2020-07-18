import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public productList = [];
  public grandTotal = 0;
  constructor(private mockService : MockService, private messagingService: MessagingService,) { }

  ngOnInit(): void {
    this.productList = this.mockService.productList.filter(x => x.Quantity > 0);
    const self = this;
    this.productList.forEach(x => {
      if (x.Quantity > 0){
        self.grandTotal += x.totalPrice;
      }
    });
  }

  increment(item): void {
    this.mockService.increment(item);
    this.updateHeader();
  }

  decrement(item): void {
    this.mockService.decrement(item);
    this.updateHeader();
  }

  updateHeader(): void{
    this.messagingService.sendMessage({key: 'AddToChart', value: this.mockService.totalQuantity});
  }

}
