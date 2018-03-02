import { InputRefDirective } from '../../lib/common/input-ref.directive';
import { AuFaInputComponent } from '../../lib/au-fa-input/au-fa-input.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { InputsComponent } from './inputs.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InputsComponent', () => {

    let component: InputsComponent,
        fixture: ComponentFixture<InputsComponent>,
        el: DebugElement,
        emailField: DebugElement;
        
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              InputsComponent, AuFaInputComponent, InputRefDirective
            ],
        }).compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(InputsComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        emailField = el.query(By.css('#email-field'));
        
        fixture.detectChanges();
    }));

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));


    it('should create a font awesome email input', async(() => {
        expect(emailField).toBeTruthy();
    }));

    it('should include the correct email icon inside the email input', async(() => {
        expect(emailField.query(By.css('.icon.fa.fa-envelope'))).toBeTruthy();
    }));

    it('should have projected the correct test input inside the email field', async(() => {
        expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
    }));

});
