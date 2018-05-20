import { AlarmeMod } from '../model/alarme-mod'

export class Alarme {
    mAlarmes:AlarmeMod[];

    constructor(){
        this.mAlarmes = [];
    }

    addAlarm(alarm: AlarmeMod){
        this.mAlarmes.push(alarm);
        setTimeout(function() {
            alert("Alarme " + alarm.nome + " está tocando.");
        }, alarm.horario);
    }

    desligarAlarm(){

    }
}
