import { Injectable } from "@angular/core";
import { HomeComponent } from "../home/home.component";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { PagenotfoundComponent } from "../pagenotfound/pagenotfound.component";

@Injectable({
    providedIn: 'root'
})
export class yksikkötesti2 {
    constructor(public router: Router) { }

    
    openFeedbackPage(): void {

        this.router.navigate(['/**']);

      }
   
}