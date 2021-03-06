/// <reference path="../../../../jquery.d.ts" />


import { SubscriberBooleanInterface } from "../../../Patterns/ObserverSubscriber/SubscriberBooleanInterface";
import { ObserverBooleanInterface } from "../../../Patterns/ObserverSubscriber/ObserverBooleanInterface";



/**
 * 
 */
export class ChecboxSubject implements SubscriberBooleanInterface {
    observers:ObserverBooleanInterface[];
    checked:boolean;
    elementReference:any;

    constructor(elementID:string) {
        this.elementReference = $( "#"+elementID );
        this.observers = [];
        this.elementReference.prop("checked", false);
    }

    notify(checked:boolean) {
        this.checked = checked;
        this.notifyAll();
    }

    subscribe( observer:ObserverBooleanInterface ) {
        this.observers.push( observer );
    }

    unsubscribe( observer:ObserverBooleanInterface ) {
        let index = this.observers.indexOf( observer );
        if (index > -1) {
            this.observers.slice(index, 1);
        }
    }

    notifyAll() {
        for( let o of this.observers ) {
            o.notify(this.checked);
            console.log(o.name + " has been notified");
        }
    }
}