import { ComponentFixture, TestBed } from '@angular/core/testing';
import { yksikkötesti1 } from "./yksikkötesti1.component";

describe("yksikkötesti 1", ()=> {
    it("Should multiply", ()=> {
        const yksikkötesti = new yksikkötesti1();
        const result = yksikkötesti.multiply(3, 5);

        expect(result).toBe(15);
    });
});