export declare class Automato {
    private afn;
    private afd;
    private prevStateName;
    private curState;
    constructor();
    getAfn(): Array<object>;
    processAfn(afnData: string): void;
    private readByLine;
    private createStates;
}
