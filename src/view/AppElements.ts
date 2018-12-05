const $: any = document.querySelector.bind(document);

export class AppElements {
  private static fileEntryElement = $('#myFileInput');
  private static fileEntryElementView = $('#myFileInputView');
  private static fileOutputView = $('#myFileOutputView');
  private static viewError =  $('#msg-error');

  constructor() {}
  
  public static get getFileEntryElement() : Element {
    return this.fileEntryElement;
  }
  
  public static get getElementInputView() : Element {
    return this.fileEntryElementView;
  }

  public static get getElementOutputView() : Element {
    return this.fileOutputView;
  }

  public static reloadPage(): void {
    window.location.reload();
  }
  public static showMessageError(msg: string): void {
    this.viewError.textContent = msg;
    this.viewError.classList.add('d-block');
  }

 
  
}

