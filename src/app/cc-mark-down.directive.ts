import { Directive, OnInit, Output, ViewChild, ElementRef, HostListener} from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appCcMarkDown]',
  // host: {
  //   '(valueChange)' : 'isEventListened($event)'  
  // }
})
export class CcMarkDownDirective implements OnInit {
  modifiedValue: string;
  constructor() { }

  ngOnInit() { }

  // onValueChange(data){
  //   this.con.nativeElement.value = "new text";
  //   this.modifiedValue = "vvs";
  //   // if($event.target.value != "")
  //   //   console.log($event.target.value);
  // }

  // @HostListener('valueChange') isEventListened($event){
  //   console.log("insidehost", $event.target.value)
  //   this.onValueChange($event);
  // }
}

