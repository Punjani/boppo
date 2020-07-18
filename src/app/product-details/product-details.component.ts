import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public productDetail: any;
  public productList = [];
  constructor(public mockService: MockService,private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.productDetail = this.mockService.selectedProd;
    this.productList = this.mockService.getProductDetails();
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
