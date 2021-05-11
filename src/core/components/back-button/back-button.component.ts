import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ecm-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
  
  @Input() label: string;

  @Output() 
  public emitterEvent: EventEmitter<any> = new EventEmitter(null);

  constructor() { }

  ngOnInit() {}

  public back(event) {
    this.emitterEvent.emit(event);
  }

}
