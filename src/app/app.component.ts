import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Markdown Editor';
  defaultText: string = '';

  // markDownText = '';

  // onValueChange($event) {
  //   console.log("$event.markDown", $event.markDown);
  //   this.markDownText = $event.markDown;
  // }

  editorContainer: any;

  @ViewChild('editor', { static: true }) editor: ElementRef;

  inputValue = `**Angular** is a typescript //opensource// front-end web application platform. [learn more](www.angular.io)`;

  ngAfterViewInit() {
    this.editorContainer = this.editor.nativeElement;
    this.toolbarHandler('');
  }

  toolbarHandler(command: string) {
    const text = `${this.inputValue}`;
    let val = ``;
    switch (command) {
      case 'bold':
        val = this.editorContainer.value = `${text}****`;
        this.editorContainer.focus();
        this.editorContainer.setSelectionRange(val.length - 2, val.length - 2);
        break;
      case 'italic':
        val = this.editorContainer.value = `${text}////`;
        this.editorContainer.focus();
        this.editorContainer.setSelectionRange(val.length - 2, val.length - 2);
        break;
      case 'link':
        val = this.editorContainer.value = `${text}[angular](url)`;
        this.editorContainer.focus();
        this.editorContainer.setSelectionRange(val.length - 4, val.length - 1);
        break;
      default:
        break;
    }
  }
}
