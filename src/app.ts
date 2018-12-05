import { Automato } from './controller/Automato';
import { AppElements } from './view/AppElements';

const automato = new Automato();


AppElements.getFileEntryElement.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    const myFileEntry = this.files[0];
    const reader = new FileReader();
    
    reader.addEventListener('load', function (e: any) {
      const afnData : any = e.target['result'];
      try {
        automato.processAfn(afnData);
      } catch (error) {       
       AppElements.showMessageError(error.message);
       throw error;
      }

    });
    reader.readAsBinaryString(myFileEntry);
    
  }
 
});

export {automato, AppElements};
