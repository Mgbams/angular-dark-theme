import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const observable1 = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.error(
    setTimeout(() => {
      return 'this is err msg';
    }, 3000)
  );

  // once we call complete the below code can't execute
  subscriber.complete();

  subscriber.next(3); // this line is unreachable
});

observable1.subscribe({
  next: (val) => console.log(val),
  error: (errormsg) => console.log(errormsg),
  complete: () => console.log('task is completed'),
});

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor() {}
}
