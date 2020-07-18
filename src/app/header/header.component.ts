import { Component, OnInit, OnDestroy } from '@angular/core';
import { MockService } from '../services/mock.service';
import { MessagingService } from '../services/messaging.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public totalQty = 0;
  private message : any;
  subscription: Subscription;

  constructor(private mockSerivce: MockService, private messagingService: MessagingService,
              public authenticateService: AuthenticationService) {
    const self = this;
    this.subscription = this.messagingService.getMessage().subscribe(message => {
      if (message != null && message.key === 'AddToChart'){
        self.totalQty = message.value;
      }
    });
  }

  ngOnInit(): void {
    this.totalQty = this.mockSerivce.totalQuantity;
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }
}
