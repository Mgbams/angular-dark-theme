import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boom',
  templateUrl: './boom.component.html',
  styles: [
   `.mad {
      color:red;
      font-size: 5rem;
    }`
  ]
})
export class BoomComponent implements OnInit {
 
   @Output() dataPassing = new EventEmitter<string>();
   
  constructor() { }

  ngOnInit(): void {
  }

}
