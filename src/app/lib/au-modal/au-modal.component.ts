import { AuModalService } from './modal.service';
import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {

  @Input()
  body: TemplateRef<any>;

  @Input()
  context: any;

  @Input()
  hideOnEsc = true

  @Input()
  hideOnClickOutside = true

  constructor(private modalService: AuModalService,
              private eventManager: EventManager) { }

  ngOnInit() {
    this.eventManager.addGlobalEventListener("window", "keyup.esc", () => {
      if (this.hideOnEsc) {
        this.close()      
      }      
    })
  }

  onClickOutsideModal() {
    if (this.hideOnClickOutside) {
      this.close()
    }    
  }

  close() {
    this.modalService.close()
  }

  cancelClick(event: KeyboardEvent) {
    event.preventDefault()
    event.stopPropagation()
  }
}
