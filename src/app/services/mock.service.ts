import { Injectable } from '@angular/core';

export class MockService {
  productList = [
    {
      id: 1,
      name: 'Banana',
      image: 'assets/images/banana.jpg',
      price: 60,
      description: 'Good to have as a break fast and one of the easiest fetched fruit in market.',
      Quantity: 0,
      totalPrice : 0
    },
    {
      id: 2,
      name: 'Mango',
      image: 'assets/images/mango.jpeg',
      price: 70,
      description: 'Good to have as a break fast and one of the easiest fetched fruit in market.',
      Quantity: 0,
      totalPrice: 0
    },
    {
      id: 3,
      name: 'Water Melon',
      image: 'assets/images/watermelon.jpg',
      price: 80,
      description: 'Good to have as a break fast and one of the easiest fetched fruit in market.',
      Quantity: 0,
      totalPrice: 0
    }
  ];

  selectedProd = this.productList[0];
  totalQuantity = 0;

  orderDetail = [];

  getProductDetails(): any{
    return this.productList;
  }

  setOrder(id, qty): any{
    const index = this.orderDetail.find(id);
    if (index < 0){
      this.orderDetail.push({id: qty});
    } else {
      this.orderDetail[index] = {id: qty};
    }
  }

  selectedProduct(product){
    this.selectedProd = product;
  }

  increment(item): void {
    const product = this.productList.find(x => x.id === item.id);
    if (product != null){
      product.Quantity += 1;
      product.totalPrice = product.Quantity * product.price;
      this.totalQuantity++;
    }
  }

  decrement(item): void {
    const product = this.productList.find(x => x.id === item.id);
    if (product != null){
      product.Quantity--;
      product.totalPrice = product.Quantity * product.price;
      this.totalQuantity--;
    }
  }
}
