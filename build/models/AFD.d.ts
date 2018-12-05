import { AFN } from '../models/AFN';
export declare class AFD extends AFN {
    private statesAFD;
    private afn;
    private currentState;
    private afnStatesValuesTemp;
    private finish;
    constructor();
    processAfd(afn: Array<object>): void;
    private findStateInAfn;
    private formatValuesOfAFD;
    private goNextState;
    private findCurrentState;
}
