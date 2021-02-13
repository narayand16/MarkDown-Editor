import { Directive, Output, HostListener, Input, EventEmitter, DoCheck, Renderer2, ElementRef } from '@angular/core';
import marked from "marked";
@Directive({
  selector: '[ccMarkDown]'
})
export class CcMarkDownDirective implements DoCheck {
  inputText: string;

  // @Input() value: string;
  // @Output() valueChange: EventEmitter<any> = new EventEmitter();

  // @HostListener('keyup', ['$event'])
  // getInputValue(event) {
  //   this.getMarkdown(event.target.value);
  // }

  // getMarkdown(inputText) {
  //   if (inputText) {
  //     this.inputText = inputText.replace(new RegExp('\//', 'g'), '*')
  //     const markDown = this.inputText ? marked(this.inputText) : '';
  //     this.valueChange.next({ markDown: markDown });
  //   }
  // }

  @Input()
  ccMarkDown;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.getMarkdown();
  }

  ngDoCheck() {
    this.getMarkdown();
  }

  private getMarkdown() {
    if (this.ccMarkDown) {
      const myInputccMarkDown = this.ccMarkDown.toString().replace(new RegExp('\//', 'g'), '*');
      this.ccMarkDown = myInputccMarkDown;
    }
    if (this.ccMarkDown) {
      const markdownHtml = marked(this.ccMarkDown);
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', markdownHtml);
    }
  }
}

