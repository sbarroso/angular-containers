import { InputRefDirective } from './../common/input-ref.directive';
import { Component, Input, ContentChild, AfterContentInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements AfterContentInit {

  @Input()
  icon: string

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  ngAfterContentInit() {
    if (!this.input) {
      console.error('The au-fa-input needs an input inside its content')
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
