export interface Person3 { //Durch das Interface kann die Variablentypzuweisung ausgelagert werden, sogar in eine andere Datei, jedoch muss export vor das interface geschrieben werden.
    name: string | number;
    age: number;
    position?: string;
}