export declare class AppElements {
    private static fileEntryElement;
    private static fileEntryElementView;
    private static fileOutputView;
    private static viewError;
    constructor();
    static readonly getFileEntryElement: Element;
    static readonly getElementInputView: Element;
    static readonly getElementOutputView: Element;
    static reloadPage(): void;
    static showMessageError(msg: string): void;
}
