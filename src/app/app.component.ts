import { Component, NgModule  } from '@angular/core';
import { Alarme } from './controller/alarme';
import { AlarmeMod } from './model/alarme-mod';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormsModule]
})
export class AppComponent {
  tempEspera: number;
  nome: string;
  title: string = 'Meu Cronometro';
  alarmForm: FormGroup;
  mAlarme:Alarme;
  isCronometroAdd: boolean = false;
    constructor(){
      this.mAlarme = new Alarme();
      this.createForm();
    }
  
    createForm(): void{
      this.alarmForm = new FormGroup({
        'nome': new FormControl(this.nome, [Validators.required, Validators.minLength(4)]),
        'tempEspera': new FormControl(this.tempEspera, [Validators.required])
      })
    }

    addCronometro(){
      console.log(this.nome + " - " + this.tempEspera)
      var aux = this.tempEspera;
      aux *= 60000;
      this.mAlarme.addAlarm(new AlarmeMod(aux, this.nome));
      this.tempEspera = 0;
      this.nome = '';
      this.isCronometroAdd = true;
    }
}
