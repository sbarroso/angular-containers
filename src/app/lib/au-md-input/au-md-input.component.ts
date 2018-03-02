import { InputRefDirective } from './../common/input-ref.directive';
import { Component, Input, ContentChild, AfterContentInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'au-md-input',
  templateUrl: './au-md-input.component.html',
  styleUrls: ['./au-md-input.component.css']
})
export class AuMdInputComponent implements AfterContentInit {

  @Input()
  icon: string

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  ngAfterContentInit() {
    if (!this.input) {
      console.error('The au-md-input needs an input inside its content')
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false
  }


  get classes() {
    const cssClasses = { }

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses
  }


}
