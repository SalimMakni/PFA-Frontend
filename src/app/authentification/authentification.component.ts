import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  Espaceadminsimple(){
    this.route.navigate(["/Espace-admin-simple"])
  }
  archiverouvrage(){
    this.route.navigate(["/archiver-ouvrage"])
  }
  ModifierOuvrage(){
    this.route.navigate(["/modifier-ouvrage"])
  }


  ajouterouvrage(){
    this.route.navigate(["/ajouter-ouvrage"])
  }

}
