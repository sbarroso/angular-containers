import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, OnDestroy } from '@angular/core';
import { AuModalService } from './modal.service';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit, OnDestroy {

  elements: HTMLBaseElement[];

  constructor(private templateRef: TemplateRef<any>, 
              private viewContainer: ViewContainerRef,
              private modalService: AuModalService) { 

  }

  ngOnInit() {
    this.modalService.close$.subscribe(() => {
      this.viewContainer.clear()
    })
  }

  ngOnDestroy() {
    this.elements.forEach(element => {
      const a = element.removeEventListener('click', this.clickHandler)
    });
  }


  @Input()
  set auModalOpenOnClick(els) {

    if (els.length) {
      this.elements = els
    } else {
      this.elements = [els]
    }

    this.elements.forEach(element => {
      element.addEventListener('click', this.clickHandler.bind(this))
    });
  }

  clickHandler() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
