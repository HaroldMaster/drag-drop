"use strict";
// let temp1 = document.getElementById("project-input")  as HTMLTemplateElement;
// let clon = temp1.content.cloneNode(true);
// document.body.appendChild(clon);
// let temp2 = document.getElementById("single-project")  as HTMLTemplateElement;
// let clon2 = temp2.content.cloneNode(true);
// document.body.appendChild(clon2);
// let temp3 = document.getElementById("project-list")  as HTMLTemplateElement;
// let clon3 = temp3.content.cloneNode(true);
// document.body.appendChild(clon3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length != 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value == "string") {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value == "string") {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof validatableInput.value == "number") {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value == "number") {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}
//Decorator Function
function autoBind(target, methodName, descriptor) {
    const original = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = original.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Template1 {
    constructor() {
        this.hostElement = document.getElementById("app");
        this.templateElement = document.getElementById("project-input");
        //this.hostElement.appendChild(this.templateElement.content.cloneNode(true));
        const nodo = document.importNode(this.templateElement.content, true);
        this.element = nodo.firstElementChild;
        //Dando estilos
        this.element.id = "user-input";
        //this.element = document.getElementById("form1") as HTMLFormElement;
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        //Imprimir valores por consola
        this.configure();
        //Mostrar template
        this.mostrarTemplate();
        // this.imprimirHola;
    }
    //Metodo para garantizar que se llenen todos los inputs
    gatherUserInput() {
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
        const titleValidator = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidator = {
            value: enteredDescription,
            required: true,
            minLength: 5,
            maxLength: 10
        };
        const peopleValidator = {
            value: +enteredPeople,
            required: true,
            min: 2
        };
        if (!validate(titleValidator) ||
            !validate(descriptionValidator) ||
            !validate(peopleValidator)) {
            alert('Datos incorrectos');
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        // const userInput = this.gatherUserInput()
        const validate = this.gatherUserInput();
        //    console.log("alertaa "+ this.gatherUserInput());
        //    console.log("alertaa "+ validate);
        // if(validate != undefined ){
        if (Array.isArray(validate)) {
            const [titulo, descripcion, personas] = validate;
            console.log(titulo, descripcion, personas);
            this.clearInputs();
        }
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    mostrarTemplate() {
        //this.hostElement.appendChild(this.templateElement.content.cloneNode(true));
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
__decorate([
    autoBind
], Template1.prototype, "submitHandler", null);
let t1 = new Template1();
//# sourceMappingURL=app.js.map