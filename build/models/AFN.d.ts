export declare class AFN {
    private _alphabet;
    private _alphabetValue;
    private _stateInitial;
    private _stateFinal;
    private _allStates;
    constructor();
    transformAfnToAfd(afn: AFN): void;
    /**
     * Setter $alphabet
     * @param {String} value
     */
    /**
    * Getter alphabet
    * @return {String}
    */
    alphabet: String;
    /**
     * Setter $alphabetVal
     * @param {String} value
     */
    /**
    * Getter alphabetValue
    * @return {String}
    */
    alphabetValue: String;
    /**
     * Getter stateInitial
     * @return {String}
     */
    /**
    * Setter stateInitial
    * @param {String} value
    */
    stateInitial: String;
    /**
     * Setter stateFinal
     * @param {String} value
     */
    /**
    * Getter stateFinal
    * @return {String}
    */
    stateFinal: String;
    /**
     * Getter allStates
     * @return {Array<object>}
     */
    readonly allStates: Array<object>;
    /**
     * Setter setStates
     * @param {object} state
     */
    setStates(state: object): void;
}
