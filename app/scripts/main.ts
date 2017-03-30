import * as $ from "./base"
import { sayHello } from "./greet";

const elem = $("#showMsg");

function showContent(content: string){
    elem.html(content);
}


let name: string = "name";
let isDone: boolean = true;
let list: string[] = ["dfds", "dfsd"];
let x: [boolean, string];
x = [isDone, name];


enum Color {RED, GREEN, BLUE};
let c: Color = Color.BLUE;

let notSure: any = 5;
notSure = "I'm not sure!";


showContent(c);


