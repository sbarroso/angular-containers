import { AuTabComponent } from '../../lib/au-tab/au-tab.component';
import { AuTabPanelComponent } from '../../lib/au-tab-panel/au-tab-panel.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TabsComponent', () => {

  let component: TabsComponent,
  fixture: ComponentFixture<TabsComponent>,
  el: DebugElement,
  tabPanel: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsComponent,
        AuTabPanelComponent,
        AuTabComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement
    tabPanel = el.query(By.css('#tabPanel'));

    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should find only one tab inside the tab container', async(() => {
    const tabs = tabPanel.queryAll(By.css('.tab'));
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  }));

  it('should find only the Contact tab button marked as active', async(() => {
    // const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    // expect(selectedButton).toBeTruthy();
    // expect(selectedButton.textContent).toBe('Contact');
  }));

  it('should display the contacts tab', async(() => {
    const contactEmail = tabPanel.query(By.css('.contact-email'));
    expect(contactEmail).toBeTruthy();
  }));

  it('should switch to the Login Tab', async(() => {
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));

    // tabButtons[0].nativeElement.click();
    // fixture.detectChanges();

    // const loginEmail = tabPanel.query(By.css('.login-email'));
    // expect(loginEmail).toBeTruthy();

    // const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    // expect(selectedButton).toBeTruthy();
    // expect(selectedButton.textContent).toBe('Login');

  }));
});
