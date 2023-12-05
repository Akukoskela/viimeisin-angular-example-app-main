import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class yksikkötesti1 {
    constructor() { }

    multiply(a: number, b: number) {
        return a * b;
    }
}