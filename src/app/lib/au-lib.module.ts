import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuModalComponent } from './au-modal/au-modal.component';
import { AuTabComponent } from './au-tab/au-tab.component';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';
import { InputRefDirective } from './common/input-ref.directive';
import { AuMdInputComponent } from './au-md-input/au-md-input.component';

@NgModule({
  declarations: [
    AuFaInputComponent,
    AuMdInputComponent,    
    InputRefDirective,
    AuTabPanelComponent,
    AuTabComponent    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuFaInputComponent,
    AuMdInputComponent,
    InputRefDirective,
    AuTabPanelComponent,
    AuTabComponent
  ]
})
export class AuLibModule { }
