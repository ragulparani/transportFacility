import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-time',
  templateUrl: './select-time.component.html',
  styleUrls: ['./select-time.component.scss']
})
export class SelectTimeComponent implements OnInit {
  isVisible = false;
  @Input() time : Date;
  @Output() timeChanged = new EventEmitter()
  editTime
  constructor() { }

  ngOnInit() {
    this.editTime = new Date(this.time.getTime())
  }

  handleOk(){
    this.isVisible = false
    this.time = this.editTime
    this.timeChanged.emit(this.time)
  }
  
  handleCancel() {
    this.isVisible = false

  }

}
