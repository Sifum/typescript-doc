import * as $ from "jquery";
import { StringValidator } from "./StringValidator";

let showMsg = $("#showMsg");
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


/**************测试*****************/
function btnFunc() {
    let str = `
        <div>
            <p>this is name!</p>
        </div>
        `;
    showMsg.html(str);
}
$("#btn1").click(btnFunc);