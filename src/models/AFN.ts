
export class AFN {
  private _alphabet: String;
  private _alphabetValue: String;
  private _stateInitial: String;
  private _stateFinal: String;
  private _allStates: Array<object> = [];

  constructor() {

  }

  public transformAfnToAfd(afn: AFN) {
    console.log(afn);
  }

  /**
   * Setter $alphabet
   * @param {String} value
   */
  public set alphabet(value: String) {
    this._alphabet = value;
  }

  /**
   * Setter $alphabetVal
   * @param {String} value
   */
  public set alphabetValue(value: String) {
    this._alphabetValue = value;
  }

  /**
   * Getter alphabet
   * @return {String}
   */
  public get alphabet(): String {
    return this._alphabet;
  }

  /**
   * Getter alphabetValue
   * @return {String}
   */
  public get alphabetValue(): String {
    return this._alphabetValue;
  }


  /**
   * Getter stateInitial
   * @return {String}
   */
  public get stateInitial(): String {
    return this._stateInitial;
  }

  /**
   * Setter stateInitial
   * @param {String} value
   */
  public set stateInitial(value: String) {
    this._stateInitial = value;
  }



  /**
   * Setter stateFinal
   * @param {String} value
   */
  public set stateFinal(value: String) {
    this._stateFinal = value;
  }

  /**
   * Getter stateFinal
   * @return {String}
   */
  public get stateFinal(): String {
    return this._stateFinal;
  }

  /**
   * Getter allStates
   * @return {Array<object>}
   */
  public get allStates(): Array<object> {
    return this._allStates;
  }

  /**
   * Setter setStates
   * @param {object} state
   */
  public setStates(state: object) {
    this._allStates.push(state);
  }


}