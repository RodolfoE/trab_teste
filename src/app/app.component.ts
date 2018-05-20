import { Component } from '@angular/core';
import { Alarme } from './controller/alarme'
import { AlarmeMod } from './model/alarme-mod'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tempEspera: number;
  nome: string;
  title: string = 'App';

  mAlarme:Alarme;
  
    constructor(){
      this.mAlarme = new Alarme();
    }
  
    addCronometro(){
      console.log(this.nome + " - " + this.tempEspera)
      var aux = this.tempEspera;
      aux *= 60000;
      this.mAlarme.addAlarm(new AlarmeMod(aux, this.nome));
      this.tempEspera = 0;
      this.nome = '';
    }
}
