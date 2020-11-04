"use strict";
// // // // //console.log("hola mundo soy harold flores :)");
// // // // let harold = " harold";
// // // // let pre = " hola mundo soy";
// // // // let pos = " y tengo ";
// // // // let edad = 25;
// // // // let bryan : {
// // // //     name: string,
// // // //     age: number,
// // // //     rol: [number, string]  // tupla en este caso un array de 2 elementos exactos no mas ni menos
// // // // }= {
// // // //     name: harold,
// // // //     age: edad,
// // // //     rol: [1, "student"]
// // // // }
// // // // let str = ["Leslie", 23 , "arias", true];
// // // // function msg(pre: string, nom: string, pos: string, edad: number){
// // // //     console.log(pre+nom+pos+edad+" :)");
// // // // } 
// // // // msg (pre, harold, pos, edad);
// // // // function msg2 (obj: {name: string, age: number, rol: [number, string]}){
// // // //     console.log(obj.name + obj.age+  obj.rol);
// // // // }
// // // // msg2(bryan);
// // // // //
// // // // let s: [number, string] = [1 , "hola"]; // en tuplas el unico metodo para romper el tamaño fijo es el metodo push
// // // // s.push(2);
// // // // console.log( s);
// // // // //
// // // // enum tipo {adm = 1, rol="ssa"};
// // // // console.log(tipo.adm)
// // // // //
// // // // type mensaje = number | string;
// // // // type obj = {nombre: string , edad: number} 
// // // // let yo: obj = {
// // // //     nombre: "harold",
// // // //     edad: 25
// // // // }
// // // // console.log(yo.nombre)
// // // // //
// // // // function add(n1:number, n2:number):number{
// // // //     return n1+n2;
// // // // }
// // // // function imprimir (num:number){
// // // //     console.log(num);
// // // // }
// // // // imprimir(add(1,1.22))
// // // // //
// // // // let fun: (a: number, b:number)=> number;
// // // // fun = add;
// // // // console.log(fun(1,2))
// // // // //
// // // // function prueba (s:string, fn: (n:any)=>void ): void {
// // // //     console.log(fn)
// // // // }
// // // // prueba("leslie", (i)=>{
// // // //     console.log("pollette" + i);
// // // //     return 2;
// // // // }
// // // // );
// // // // //
// // // // function sendRequest(data: string, cb: (response: any) => void) {
// // // //     // ... sending a request with "data"
// // // //     return cb({data: 'Hi there!'});
// // // //   }
// // // //   sendRequest('Send this!', (response) => { 
// // // //     console.log(response);
// // // //     return true;
// // // //    });
// // // //    //
// // // //    let uk : any;
// // // //    let stra: string;
// // // //    uk= "hola"
// // // //    stra= uk;
// // // // //
// // // // type mesaje = "msg1" | "msg2";
// // // // let mes: mesaje;
// // // // mes = "msg2"
// // // // console.log(mes)
// // // // //
// // // // function mensajito (msg: string){
// // // //     console.log(msg)
// // // // }
// // // // //
// // // // let btn = document.querySelector("button")!;
// // // // btn.addEventListener("click", ()=>{
// // // //     console.log("debugg") 
// // // // }) 
// // // // // 
// // // // let person =  {
// // // //     name:"silvia",
// // // //     age: 50
// // // // }
// // // // let copy = {...person};
// // // // person.name="luis";
// // // // console.log(copy)
// // // // //
// // // // let arrs : number[] = [1,2,3,4];
// // // // let suma = (...numbers: number[]) =>{
// // // //     let aux = 0;
// // // //     numbers.map(e=>{
// // // //         aux= aux + e;
// // // //     });
// // // //     return aux;
// // // // }
// // // // console.log(suma(...arrs));
// // // // //
// // // // const materiasU = ["mate","fisica","quimica"];
// // // // const [m1, m2, ...matdif] = materiasU;
// // // // console.log(matdif) // quimica
// // // // console.log(m1, m2) // mate fisica
// // // // //
// // // // let perros ={
// // // //     dogName: "Kiara y Chimuelo",
// // // //     dogAge: 10
// // // // }
// // // // let {dogName, dogAge}= perros
// // // // let {dogName: dog, dogAge: dage}= perros
// // // // console.log(dogAge);
// // // // console.log(dog);
// // // // //
// // // // //
// // // // class Department {
// // // //     name: string;
// // // //     constructor(n: string) {
// // // //       this.name = n;
// // // //     }
// // // //     describe(this: Department) {
// // // //       console.log('Department: ' + this.name);
// // // //     }
// // // //   }
// // // //   const accounting = new Department('Accounting');
// // // //   accounting.describe();
// // // //   const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// // // //   accountingCopy.describe();
// // // // //
// // // // class Perfumes {
// // // //     protected name: string;
// // // //     constructor(n: string){
// // // //         this.name = n;
// // // //     }
// // // //     protected describe(this: Perfumes){
// // // //         console.log(this.name);
// // // //     }
// // // //     protected toString(){
// // // //         return this.name+" is my name";
// // // //     }
// // // // }
// // // // class CaroliaHerrera extends Perfumes {
// // // //     constructor(public genero: string){
// // // //         super("CH");
// // // //     }
// // // //     toPar(){
// // // //      // console.log(this.toString() + " and my arom is for " + this.genero);
// // // //       return this.toString();
// // // //     }
// // // //  }
// // // //  let ch1 = new CaroliaHerrera("male");
// // // //  //ch1.toPar();
// // // // let c = {tostring : ch1.toPar}
// // // // c.tostring;
// // // // // let perfume = new Perfumes("212 VIP");
// // // // // perfume.describe();
// // // // // let che = { nameSS: "lndh", describe : perfume.describe};
// // // // // che.describe();
// // // //
// // // // abstract class figura {
// // // //     constructor(protected nombre: string){
// // // //     }
// // // //     abstract area(): string;
// // // // }
// // // // class cuadrado extends figura{
// // // //     private lado : number;
// // // //     static mensaje = "favorito"
// // // //     constructor(){
// // // //         super("cuadrado")
// // // //         this.lado = 0;
// // // //     }
// // // //     get LadoCuadrado (){
// // // //         return this.lado
// // // //     }
// // // //     set LadoCuadrado (lado : number){
// // // //         this.lado = lado;
// // // //     }
// // // //     area() {
// // // //         return "El area del "+ this.nombre + " es " + (this.lado * this.lado);
// // // //     }
// // // //     static calcid(n : number) {
// // // //         return n+100;
// // // //     }
// // // //     imprimirId(){
// // // //     return cuadrado.calcid(10)
// // // //     }
// // // // }
// // // // let cuadrado1 = new cuadrado();
// // // // cuadrado1.LadoCuadrado = 7;
// // // // console.log(cuadrado1.area());
// // // // console.log(cuadrado1.imprimirId());
// // // // console.log(cuadrado.calcid(20));
// // // //
// // // // let profesor : Ci;
// // // // profesor = {
// // // //     nombre:"Luis",
// // // //     apellido: "Alfredo",
// // // //     //edad: 55
// // // // }
// // // // let estudiante : Ci;
// // // // estudiante = {
// // // //     nombre: "Harold",
// // // //     apellido: "flores"
// // // // }
// // // //console.log(estudiante.apellido)
// // // interface Ci {
// // //     readonly nombre?: string,
// // //      apellido: string,
// // // }
// // // class Personas implements Ci {
// // //     // nombre: string;
// // //     // apellido: string;
// // //     // constructor(n: string, a:string){
// // //     //      this.nombre = n;
// // //     //      this.apellido =a;
// // //     // }
// // //     public edad ?: number;
// // //     constructor( public apellido: string, edad?: number ){ 
// // //         this.edad=edad;
// // //     }
// // //     cambios(){
// // //         return ""
// // //     }
// // // }
// // // let yo = new Personas("Harold", 20 );
// // // console.log(yo)
// // // // let yo: Ci = new Personas("Harold", "Flores");
// // // // let tu: Ci = new Personas("Leslie", "Arias");
// // // //yo.nombre="david"
// // // //console.log(yo, tu)
// // // //
// // // class Servivo {
// // // }
// // // class Animal {}
// // //
// // type numerico = number | boolean;
// // type letras = string | number | Date;
// // type universal = numerico & letras;
// // function suma (a: universal, b:universal) {
// //     if(typeof a == "number" && typeof b=="number"){
// //         return a + b;
// //     }
// // }
// // type persona = {
// //     nombre: string,
// //     ci: number
// // }
// // type estudiante = {
// //     nombre: string,
// //     codigo: number
// // }
// // type desconocido = persona | estudiante;
// // function imprimirPersona(des : desconocido){
// //     if("codigo" in des){
// //     console.log(des.codigo);
// //     }
// // }
// // // class Car {
// // //     manejar(){
// // //         console.log("Manejando...")
// // //     }
// // // }
// // // class Sedan {
// // //     manejar(){
// // //         console.log("Manejando...")
// // //     }
// // //     espacio(){
// // //         console.log("el espacio del auto es pequeño")
// // //     }
// // // }
// // // type Vehiculo = Car | Sedan;
// // // let v = new Sedan();
// // // function imprimirFuncion(vehiculo: Vehiculo){
// // //     vehiculo.manejar();
// // //     if(vehiculo instanceof Sedan){
// // //     vehiculo.espacio();
// // //     }
// // // }
// // interface pajaro {
// //     type: 'pajaro',
// //     velocidadVuelo: string
// // }
// // interface leon {
// //     type: 'leon',
// //     velocidadCarrera: string
// // }
// // type Animal = pajaro | leon;
// // function Velocidad (animal: Animal){
// //     switch(animal.type){
// //         case "pajaro":
// //         console.log("la velocidad del animal es: "+ animal.velocidadVuelo);
// //         break;
// //         case "leon":
// //         console.log("La velocidad del animal es: " + animal.velocidadCarrera);
// //         break;
// //     }
// // }
// // interface UtilesEscolares {
// //     tipo: string;
// //     costo?: number
// // }
// // let cuaderno: UtilesEscolares = {
// //     tipo: "cuaderno a cuadros"
// // }
// // let btn = document.querySelector("button")!;
// // btn.innerHTML ="Aplastame";
// // let input = <HTMLInputElement> document.getElementById("input1") ;
// // input.value="Harold";
// // interface persona {
// //     nombre: string,
// //     imprimir : ()=>void
// // }
// // class Yo implements persona {
// //     constructor( public nombre: string, public apellido: string){
// //     }
// //     imprimir (){
// //         console.log(this.nombre + " " + this.apellido)
// //     }
// // }
// // let harold : persona = new Yo("Harold", "Flores");
// // interface animal {
// //     [prop: string]: number,
// // }
// // let perro : animal = {
// //     id: 123,
// //     codigo: 123,
// //     num: 1
// // }
// // console.log(perro.num)
// type Combinable = number | string;
// function Union (a: number, b: number): number;
// function Union (a: string, b: string): string;
// function Union (a: string, b: number): string;
// function Union (a: Combinable, b: Combinable){
//     if(typeof a =="number" && typeof b=="number"){
//     return a + b;}
//     return a.toString() + b.toString();
// }
// let resultado = Union("Harold","Flores").split("");
// const p = undefined;
// const j = p ?? "DEFAULT"
// console.log(j)
// const data = {
//     nombre:"harold",
//     pasatiempo : {
//         actividad: "natacion"
//     }
// }
// console.log(data?.pasatiempo?.actividad)
// function add<t>(a:t, b:t ){
//     return JSON.stringify(a)+JSON.stringify(b);
// }
// console.log(add({a:"a",b:"b"},{}).slice(1,3));
// let b: {nombre: string, apellido: string} = {
//     nombre: "adcs",
//     apellido: "adfd"
// }
//GENERICOS!!!!!!!!!!!!!!!
// function imprimir <T extends object, U extends keyof T> (a: T, key: U){
//     return a[key];
// }
//console.log(imprimir({nombre:"harold"}, 'nombre' ));
// class Animales {
//     listaAnimales: Array<string> = [];
//     buscarLista(){
//         return this.listaAnimales[i]
//     }
// }
// function extractData <T extends object, U extends keyof T>(ob1:T , ob2:U){
// }
// let user ={
//     userId: 1
//}
// const data = extractData<string>(user, 'userId');
// let coleccion : Array <number  | string> = [1,2,"3"]
// interface obj {
//     nombre: string;
// }
// const promesa : Promise<obj> = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({nombre: "Leslie"})
//     }, 2000);
// });
//  promesa.then((data)=>{
//     console.log(data.nombre)
//  })
// //
// function unir <T, U>(obj1: T , obj2 : U){
//     return Object.assign(obj1, obj2)
//    }
//    const result = unir({nombre: "Harold"}, {edad: 23, id: 1722})
// console.log(result.id);
// interface resultado {
//     nombre: string,
//     apellido: string,
//     edad: number,
//     id: number
// }
// function unir (obj1: object , obj2 : object){
//     return Object.assign(obj1, obj2)
//    }
//    const result = <resultado>unir({nombre: "Harold", apellido:"Flores"}, {edad: 23, id: 1722})
// console.log(result.id);
// interface objs{
//     nombre: string
// }
// function unir <T extends object & objs , U extends object> (obj1: T , obj2 : U){
//     return Object.assign(obj1.nombre, obj1, obj2)
//    }
//    const result = unir({nombre: "Harold", apellido:"Flores"}, {edad:25, id:17121})
// console.log(result.apellido);
// function imprimirMarca <T extends object, U > (telefono: T, marca: U){
//     return telefono[marca];
// }
// interface lista {
//     name: string,
//     apellido?: string | number
// }
// class persona <T extends lista> {
//     public lista : T[]=[];
//     addItem(item: T){
//         this.lista.push(item)
//     }
//     addLast<U extends string>(last: U){
//         this.lista.forEach(
//             (e: lista) =>{
//                 e.apellido = last;});
//     }
//     getItems(){
//         this.addLast("Flores");
//         return this.lista;}
// }
// let yo = new persona();
// yo.addItem({name:"Harold"});
// yo.addItem({name:"Leslie"});
// yo.addItem({name:"Negrito"});
// console.log(yo.getItems());
//console.log(yo.getItems()[0].name);
// interface carro {
//     marca: string,
//     modelo: string
// }
// function ImprimirCarro(marca: string, modelo:string): Partial <carro>{
//     let chevrolet = {
//         marca: marca
//     }
//     return chevrolet;
// }
// console.log(ImprimirCarro("Chevrolet", "Vitara"))
// let cursos : string[] = ["Mate", "Fisica"];
// cursos.push("Ingles")
// function mensaje(con : Function){
//     console.log("MENSAJEANDO...")
//     console.log(con)
// }
// @mensaje
// class Persona {
//     nombre: string;
//     constructor(nombre: string){
//         this.nombre = nombre
//     }
//     getName(){
//         return this.nombre
//     }
// }
//  let yo = new Persona("HAROLD");
// function mensaje(mensaje: string){
//     return function (constructor: Function){
//         console.log(mensaje);
//         console.log(constructor);
//     }
// }
// @mensaje("CARGANDO...")
// class Persona {
//     nombre: string;
//     constructor(nombre: string){
//         this.nombre = nombre
//     }
//     getName(){
//         return this.nombre
//     }
// }
//  let yo = new Persona("HAROLD");
//  console.log(yo.getName())
//decorators with templates
// function mensaje0(){
//     console.log("Mensaje 0 fuera de la funcion del decorador")
//     return function(constructor: Function){
//         console.log("Mensaje 0 dentro de la funcion del decorador")
//     }
// }
// function mensaje1(content: string, tagId: string){
//     console.log("Mensaje 1 fuera de la funcion del decorador")
//     return function (constructor: any){
//         console.log("Mensaje 1 dentro de la funcion del decorador")
//         let etiqueta = document.getElementById(tagId) as HTMLDivElement;
//         let con = new constructor("H&L");
//         if(etiqueta){
//             etiqueta.innerHTML= content;
//             etiqueta.querySelector("h1")!.innerHTML= con.nombre;
//         }
//     }
// }
// @mensaje0()
// @mensaje1("<h1>CARGANDO...</h1>", "123")
// class Persona {
//     constructor(public nombre: string){}
//     getName(){
//         return this.nombre
//     }
// }
//Atribute decorator
// function log (target: any, propetyName: string | symbol){
//     console.log("Decorador de atributo");
//     console.log(target, propetyName)
// }
//Accessor decorator
// function logAccessor(target: any, name: string, descriptor: PropertyDescriptor){
//     console.log("Accessor decorator")
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }
// Decorador de Metodos
// function logMethod(target: any, name: string, descriptor: PropertyDescriptor){
//     console.log("Method Decorator")
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }
// Decorador en Parámetros
// function logParameters(target: any, name: string, position: number){
//     console.log("Parameter Decorator")
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }
// class Electrodomesticos {
//     marca: string ;
//     private _tipo: string;
//     set tipo(newTipo: string){
//         this._tipo = newTipo;
//     }
//     añadirMensaje( previo: string, @logParameters posterior: string){
//         return previo + this.marca + this._tipo + posterior;
//     }
//     constructor(m: string, t: string){
//         this.marca=m;
//         this._tipo=t;
//     }
// }
//RETURNING A CLASS INTO A CLASS DECORATOR
// function pintarPantalla(template: string, id: string){
//     return function <T extends {new(...args: any[]):{marca: string}}> (constructorTelefono: T) {
//         return class extends constructorTelefono {
//             constructor(...args: any[]){
//                 super();
//                 let tag = document.getElementById(id) as HTMLDivElement;
//                 tag.innerHTML= template + this.marca;
//             }
//         }
//     }
// }
// @pintarPantalla("<h1>La marca de mi telefono es : <h1>", "123")
// class Telefono {
//     marca : string = "Huawei";
//     constructor(){
//         console.log("Constructor original")
//     }
// }
// let tlf = new Telefono();
// function autoBind(_: any, _2:string, descriptor: PropertyDescriptor ){
//     console.log(descriptor);
//     const originalMethod = descriptor.value;
//     console.log(originalMethod)
//     const newDescriptor : PropertyDescriptor ={
//         configurable:true,
//         enumerable:false,
//         get (){
//             const boundF = originalMethod.bind(this);
//             return boundF
//         }
//     }
//     return newDescriptor;
// }
// class Print {
//     mensaje : string = "FUNCIONA";
//     @autoBind
//     getMsj(){
//         console.log(this.mensaje);
//     }
// }
// let p = new Print();
// let btn = document.querySelector("button") as HTMLButtonElement;
// btn.addEventListener("click", p.getMsj );
//# sourceMappingURL=analytics.js.map