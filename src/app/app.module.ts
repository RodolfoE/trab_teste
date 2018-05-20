import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Alarme } from './controller/alarme'
import { AlarmeMod } from './model/alarme-mod'


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  mAlarme:Alarme;

  constructor(){
    this.mAlarme = new Alarme();
    this.mAlarme.addAlarm(new AlarmeMod(20000, 'Tomar Remédio'));
  }

  addCronometro(nome:string, tempo: number){
    this.mAlarme.addAlarm(new AlarmeMod(tempo, nome));
  }

}
