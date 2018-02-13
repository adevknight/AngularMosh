import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @HostListener('blur') onBlur() {
    const value: string = this.x.nativeElement.value;
    this.x.nativeElement.value = value.toUpperCase();
    console.log('On Blur...');
  }

  constructor(private x: ElementRef) { }

}
