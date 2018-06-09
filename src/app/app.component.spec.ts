import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';
import { Browser } from 'protractor';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, BrowserModule, ReactiveFormsModule ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      de=fixture.debugElement.query(By.css('form'));
      
    });
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Meu Cronometro');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('M1 de Teste de Software');
  }));
  it ('should set isCronometroAdd to true', async(() =>{
    comp.addCronometro();
    expect(comp.isCronometroAdd).toBeTruthy();
  }))

  
  it ('form should be invalid', async( () => {
    comp.alarmForm.controls['nome'].setValue('');
    comp.alarmForm.controls['tempEspera'].setValue('');
    expect(comp.alarmForm.valid).toBeFalsy();
  }))
  
  it ('form should be invalid', async( () => {
    comp.alarmForm.controls['nome'].setValue('Tomar remédio');
    comp.alarmForm.controls['tempEspera'].setValue(200);
    expect(comp.alarmForm.valid).toBeTruthy();
  }))
  

});
