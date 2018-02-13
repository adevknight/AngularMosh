import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @HostListener('focus') onFocus() {
    console.log('On Focus...');
  }
  @HostListener('blur') onBlur() {
    console.log('On Blur...');
  }

  constructor() { }

}
