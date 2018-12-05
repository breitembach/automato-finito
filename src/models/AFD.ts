import { AFN } from '../models/AFN';
import { AppElements } from '../view/AppElements';

export class AFD extends AFN {

  private statesAFD: any= {};
  private afn: any = {};
  private currentState: any[] = [];
  private afnStatesValuesTemp: String[] = [];
  private finish: boolean = false;

  constructor() {
    super();
  }

  public processAfd(afn: Array<object>) {
    this.afn = afn;
    const initialState = afn[0];
    const initialStateName: any = Object.keys(initialState);
    const initialStateValue: any = Object.values(initialState)[0];
    this.stateInitial = initialStateName;
        
    this.statesAFD[initialStateName] = initialStateValue;
    const nextState: string = initialStateValue[1]; // "x, x,x1"
    this.currentState.push(nextState);
    
    this.findStateInAfn(afn, nextState);
    
  }

  private findStateInAfn(afn: Array<object>, search: string) {
     
    while(true) {
      
      let curKeyAFD:any = this.currentState[0].split(',');
      for (const key in curKeyAFD) {
        let state: any = curKeyAFD[key];
        this.findCurrentState(state);
      }

      let state: string;
      let state2: string;
      state = this.afnStatesValuesTemp.map(d => {
        return d[0];// zero get just values of afn 0
      }).reduce((prev, cur) => { return this.formatValuesOfAFD(prev, cur)}); //to separe with virgula or not | Concat for one state
        
      state2 = this.afnStatesValuesTemp.map(d => {
        return d[1];// one get just values of afn 1
      }).reduce((prev, cur) => { return this.formatValuesOfAFD(prev, cur)});

      if(this.goNextState(state)) { 
        if(state in this.statesAFD && state2 in this.statesAFD) {
          this.finish = true;
          this.statesAFD[this.currentState[0]] = [state, state2];
          
        } else {
         
          this.statesAFD[this.currentState[0]] = [state, state2];
          this.currentState = [state2];
        }
      }else { 
        this.statesAFD[this.currentState[0]] = [state, state2];
        this.currentState = [state];
        
      }
      this.afnStatesValuesTemp = [];
      console.log("AFD", this.statesAFD);

      if(this.finish == true) {
        break;
      }
      
    }// while
    
    //finish the program and show the result on front end
    AppElements.getElementOutputView.textContent = `AB: 0 1 \n`;
    AppElements.getElementOutputView.textContent += `i: ${this.stateInitial} \n`;
    AppElements.getElementOutputView.textContent += `f: ${this.currentState} \n`;
    let index :number = 0;
    for (const property in this.statesAFD) {
      AppElements.getElementOutputView.textContent +=
        `${property} ${index} ${this.statesAFD[property][index]}\n${property} ${index+1} ${this.statesAFD[property][index+1]}\n`;
    }

  }
  private formatValuesOfAFD(prev: string, cur: string): string {
    if(prev == undefined || prev == 'undefined') {
      return `${cur}`;
    }
    if(cur == undefined || cur == 'undefined') {
      return `${prev}`;
    }
    if(prev && cur) {
      return `${prev},${cur}`;
    }
  }

  private goNextState(state: string): boolean {
    if(state in this.statesAFD) return true;
    return false
  }

  private findCurrentState(state: string) {
    const afn = this.afn;
    
    for (const key in afn) {
      if (afn.hasOwnProperty(key)) {
        if(afn[key].hasOwnProperty(state)) {
          this.afnStatesValuesTemp.push(afn[key][state]);
        }

      }
    }
  }

}