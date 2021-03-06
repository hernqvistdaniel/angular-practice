import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs'
import { MessageService } from './message.service'; 


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // send message after fetching heroes
    this.messageService.add('HeroService: fetched Heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
