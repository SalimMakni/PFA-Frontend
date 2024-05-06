import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modifier-ouvrage',
  templateUrl: './modifier-ouvrage.component.html',
  styleUrls: ['./modifier-ouvrage.component.css']
})
export class ModifierOuvrageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
 Espaceadminprincipale(){
   this.route.navigate(["/espace-admin-principale"])
 }
 Espaceadminsimple(){
   this.route.navigate(["/espace-admin-simple"])
 }
}
