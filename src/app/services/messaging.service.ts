import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

export class MessagingService {

  private subject = new Subject<any>();

    sendMessage(message: any) {
        this.subject.next(message);
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
