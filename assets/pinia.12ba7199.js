import{bo as t}from"./index.f1304281.js";const a=t("counter",{state:()=>({count:0,name:"Eduardo",age:33,salary:3e3,lastName:"Buranov",arr:[],obj:{}}),getters:{doubleCount:e=>e.count*2,addAge:e=>e.age++},actions:{increment(){this.count+=5},incrementAge(){this.age+=5}}});export{a as u};