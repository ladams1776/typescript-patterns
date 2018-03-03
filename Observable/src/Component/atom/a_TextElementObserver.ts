/// <reference path="../../../jquery.d.ts" />
import { ObserverBooleanInterface } from "../../Patterns/ObserverSubscriber/ObserverBooleanInterface";




/**
 * Simple Text Element Observer. 
 * If notified true, we make sure we can edit the text element field. 
 * Otherwise we make sure that it is uneditable.
 */
export class a_TextElementObserver implements ObserverBooleanInterface {
    name:string;
    id:string;
    elementReference:any;

    /**
     * 
     * @param {string} elementID the element's id in a string format.
     */
    constructor(elementID:string) {
        this.name = elementID;
        this.id = elementID;
        this.elementReference = $( "#"+this.id);
    }


    
    notify(checked:boolean) {
        if (checked === true) {
            this.elementReference.prop("readonly", false);
        } else {
            this.elementReference.prop("readonly", true);
        }
    }
}