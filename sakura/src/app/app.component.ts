import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.components';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';

import { Person3 } from './interfaces/person3.interface';

interface Person2 { //Durch das Interface kann die Variablentypzuweisung ausgelagert werden.
  name: string | number;
  age: number;
  position?: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainContentComponent,
    FooterComponent,
    ImprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //primitive Types
  theString = "das ist ein String";
  theNumber = 1313213123132131;
  theBoolean = true;

  theUndefined = undefined;
  theNull = null;

  theArray:(number | string | boolean)[] = [1, 2]
  theArray2:[string,number] = ["1", 2]

  // bigint; // primitive Type für sehr große Zahlen
  // sympol; // symbol type
  theTypeless: string | undefined | number;
  
  noteType: "trash" | "note" = "trash"
  noteTypeNumber: 4 | 2 = 2

  person: {
    readonly name: string | number; // readonly sorgt dafür, dass der Parameter zur Konstante wird und nicht nachträglich, durch eine Zuweisung verändert werden kann
    age: number;
    position?: string; // Durch das Fragezeichen nach der Variable, muss die Zuweisung nicht erfolgen. 
  }       = {
    name: "Florian",
    age: 50,
    position: "Manager"
  }

  person2:Person2 = {
    name: "David",
    age: 28,
    position: "CEO"
  }

  person3:Person3 = {
    name: "Manule",
    age: 25,
    position: "CSO"
  }

  fruit:string = ""
  fruitList: [string] = ["Banana"]

  constructor(){
    this.theTypeless = "asdasd"
    this.theArray = [1, "4"]
    this.theArray = ["5", 8]
    this.add(1, 2) // solte ein Parameter rot unterstrichen werden, dann wurde der Funktion ein falscher Parametertyp übergeben.
    this.noteType = "note"
    this.noteTypeNumber = 4
    this.person.position = "Boss" // Wenn einem Objekt bereits Parameter übergen wurden, kann nicht einfach der Variable anderer Parmatertyp zugewiesen werden, außer es wurde ein zusätzlicher Typ nachträglich zugewiesen.

    let banana = this.fruitList.pop()
    if(banana != undefined){
      this.fruit = banana
    }else{
      banana
    }
  }

  add(a:number,b:number):number{  // der Type nach der Klammer beschreibt den return Wert. Die Zuweisung in den Klammern definiert, welcher Varablentyp die Funktionsparameter haben dürfen. Die Variablentypen müssen/sollten definiert werden bei Angular
    return a + b
  }
  title = 'sakura';
}
