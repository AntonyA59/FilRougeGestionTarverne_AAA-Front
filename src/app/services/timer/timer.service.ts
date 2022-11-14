import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timers = new BehaviorSubject([] as any[]);
  timers$=this.timers.asObservable();
  constructor() { }
  setTimers(newTimers: any[]) {
    this.timers.next(newTimers);
  }
  addTimer(newTimer:any){
    let newTab:any[]=Array.from(this.timers.getValue());
    newTab.push(newTimer);
    this.timers.next(newTab);
  }
}
