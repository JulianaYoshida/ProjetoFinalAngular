import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private webReqService: WebRequestService) { }

  createCard(title: string) {
    return this.webReqService.post ('cards', {title})
  }
}
