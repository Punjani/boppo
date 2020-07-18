import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';
import { MessagingService } from '../services/messaging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productList = [];
  constructor(private mockService: MockService,
              private messagingService: MessagingService,
              private router: Router) { }

  ngOnInit(): void {
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

  productDescription(item): any{
    this.mockService.selectedProduct(item);
    this.router.navigate(['/productDetails']);
  }

}
