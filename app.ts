// let temp1 = document.getElementById("project-input")  as HTMLTemplateElement;
// let clon = temp1.content.cloneNode(true);
// document.body.appendChild(clon);
// let temp2 = document.getElementById("single-project")  as HTMLTemplateElement;
// let clon2 = temp2.content.cloneNode(true);
// document.body.appendChild(clon2);
// let temp3 = document.getElementById("project-list")  as HTMLTemplateElement;
// let clon3 = temp3.content.cloneNode(true);
// document.body.appendChild(clon3);

// function tupla():[string, number, string]{
//  return ["Harold", 25, "Flores"]
// }
// let [nombre, edad, apellido] = tupla();
// console.log(nombre, edad, apellido)

// function testDecorator(t: any, n: string, d : PropertyDescriptor){
//    // const original = d.value;
//     const newdes: PropertyDescriptor = {
//         configurable: true,
//         get(){
//             return console.log("Harold Flores") 
//         }
//     }
//   //  console.log(newdes);
//     return newdes;
// }

//Validation
interface Validatable {
    value: string | number,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number
}
 function validate(validatableInput : Validatable){
    let isValid = true;
    if(validatableInput.required){
        isValid = isValid && validatableInput.value.toString().trim().length != 0;
    }
    if(validatableInput.minLength != null && typeof validatableInput.value =="string"){
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if(validatableInput.maxLength != null && typeof validatableInput.value =="string"){
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if(validatableInput.min != null && typeof validatableInput.value =="number"){
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if(validatableInput.max != null && typeof validatableInput.value =="number"){
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
 }

//Decorator Function
function autoBind(target: any, methodName: string , descriptor: PropertyDescriptor){
    const original = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get(){
            const boundFn =  original.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Template1 {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;
    constructor(){
        this.hostElement = document.getElementById("app") as HTMLDivElement;
        this.templateElement = document.getElementById("project-input")  as HTMLTemplateElement;
        //this.hostElement.appendChild(this.templateElement.content.cloneNode(true));
        const nodo = document.importNode(this.templateElement.content, true);
        this.element = nodo.firstElementChild as HTMLFormElement;
        //Dando estilos
        this.element.id = "user-input"
       //this.element = document.getElementById("form1") as HTMLFormElement;
       this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector("#description") as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector("#people") as HTMLInputElement;
        //Imprimir valores por consola
        this.configure();
        //Mostrar template
        this.mostrarTemplate();

       // this.imprimirHola;
       }
    
       //Metodo para garantizar que se llenen todos los inputs
    private gatherUserInput(): [string, string, number] | undefined{
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;  
        //FORMA DE VALIDAR 1
        // if(enteredDescription.trim().length ==0 || 
        // enteredPeople.trim().length==0 ||
        // enteredTitle.trim().length==0){
        //     alert('invalid inputs')
        //     return;
        // }
        const titleValidator : Validatable = {
            value: enteredTitle,
            required: true
        }
        const descriptionValidator : Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
            maxLength: 10
        }
        const peopleValidator : Validatable = {
            value: +enteredPeople,
            required: true,
            min: 2
        }
        if(!validate(titleValidator) ||
        !validate(descriptionValidator) ||
        !validate(peopleValidator)){
            alert('Datos incorrectos')
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople]
        }
    }
    private clearInputs(){
        this.titleInputElement.value ='';
        this.descriptionInputElement.value ='';
        this.peopleInputElement.value ='';
    }
     @autoBind
     private submitHandler(event: Event){
        event.preventDefault();
       // const userInput = this.gatherUserInput()
       const validate = this.gatherUserInput();
    //    console.log("alertaa "+ this.gatherUserInput());
    //    console.log("alertaa "+ validate);

      // if(validate != undefined ){
          if(Array.isArray(validate)){
            const [titulo, descripcion, personas] = validate;
        console.log(titulo, descripcion, personas); 
        this.clearInputs();
       }
        
     }
     private configure(){
         this.element.addEventListener("submit", this.submitHandler);
     }
    mostrarTemplate (){
        //this.hostElement.appendChild(this.templateElement.content.cloneNode(true));
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
    // @testDecorator
    // imprimirHola(){
    //     console.log("Hola")
    // }
    
    // ImprimirValores(){
    //     this.element.addEventListener("submit",()=>{
    //         console.log(this.title.value);
    //     });
    // }
}
let t1 = new Template1();
