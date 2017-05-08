<<<<<<< HEAD
import * as $ from "jquery";
import { StringValidator } from "./StringValidator";

class Ss implements StringValidator {
    name: string;

    constructor(s: string) {
        this.name = s;
    }
    isAcceptable() {
        return this.name.length === 5;
    }
}

class Sss extends Ss {
    constructor(ss: string){
        super(ss);
    }
}

let ss = new Sss("sssss");


let config = {
        colors: ["red", "green", "blue"],
        appName: "proj",
        author: "Minson"
};

const elem = $("#showMsg");
const btn = $("#btn");

btn.click(()=>{
    elem.html("btn clicked!");
});

let name: string = "minson";
let age: string = "31";
let address: string = "shanghai";

if (ss.isAcceptable()) {
    elem.html("is ss");
} else {
    elem.html(config.author);
}


=======
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


>>>>>>> e427dfc046323ab6d0fef4c37d53409a4fae02bf
