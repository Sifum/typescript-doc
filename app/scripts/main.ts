import * as $ from "jquery";

let config = {
        colors: ["red", "green", "blue"],
        appName: "proj",
        author: "Minson"
};

const util = new Util();
const elem = $("#showMsg");
const btn = $("#btn");

btn.click(()=>{
    elem.html("btn clicked!");
});

let name: string = "minson";
let age: string = "31";
let address: string = "shanghai";

let result1 =  util.addMoreString(name, age, address);

elem.html(result1);
