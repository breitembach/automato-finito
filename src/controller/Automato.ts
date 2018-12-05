
import { AppElements } from '../view/AppElements';
import { AFN } from '../models/AFN';
import { AFD } from '../models/AFD';

export class Automato {
  private afn = new AFN();
  private afd = new AFD();
  private prevStateName: string;
  private curState: string;

  constructor(){}
  
  public getAfn(): Array<object> {
    return this.afn.allStates;
  }
  
  public processAfn(afnData: string) {
    
    if(afnData == "") {
      throw new Error("Arquivo Vazio");     
    }
    let lines: any = afnData.split('\n');
    if(lines[0].split(':')[0] != 'AB') {
      throw new Error("Formato de afn não permitido");
    }
    AppElements.getElementInputView.textContent = afnData;
    for(var i = 0; i < lines.length; i++){
      this.readByLine(lines[i].split(':'))
    }
    this.afd.processAfd(this.afn.allStates);
  }
  
  private readByLine(line: String[]) {
   
    for (let index = 0; index < line.length; index++) { // each array of strings
     
      if(line[index] == 'AB') { // one time
        this.afn.alphabet = line[index];
        this.afn.alphabetValue = line[index+1].trim().replace(' ','');
        if(this.afn.alphabetValue != '01') {
          throw new Error("Alfabeto de afn errado!!! Dica: AB: 0 1");
        }
        break;
      } else if(line[index] == 'i') {
        this.afn.stateInitial = line[index+1].trim(); //get second element array
        break;
      } else if(line[index] == 'f') {
        this.afn.stateFinal = line[index+1]; //get second element array
        break; // jump to next dont goback 
      } else {
        this.createStates(line[index].split(' ')); // states avaiable ex: ['x1', '0', 'x100']
        
      }

    }
    
  }

  private createStates(line: string[]):any {
    const state: any = line[0] || undefined;
    const stateCur = line[2]|| undefined;
    
    let stateObj: any= {};

    //create x: [x, x1];
    //create x1: [x1, x2];
    if(!(state == this.prevStateName)) {
      this.prevStateName = state;
      this.curState = stateCur;
    }else {
      stateObj[state] = [this.curState, stateCur];
      this.afn.setStates(stateObj);
    }
  }

}
