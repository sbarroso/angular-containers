import { AuTabComponent } from './../au-tab/au-tab.component';
import { Component, QueryList, ContentChildren, AfterContentInit, ViewChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['./au-tab-panel.component.scss']
})
export class AuTabPanelComponent implements AfterContentInit {

  @ContentChildren(AuTabComponent)
  tabs: QueryList<AuTabComponent>

  @Input()
  headerTemplate: TemplateRef<any>;

  ngAfterContentInit() {
    console.log()
    const selectedTab = this.tabs.find(tab => tab.selected);

    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: AuTabComponent) {
    this.tabs.forEach(tab => tab.selected = false)
    tab.selected = true
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    }
  }
}
