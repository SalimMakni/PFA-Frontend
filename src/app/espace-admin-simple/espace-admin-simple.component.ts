import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-admin-simple',
  templateUrl: './espace-admin-simple.component.html',
  styleUrls: ['./espace-admin-simple.component.css']
})
export class EspaceAdminSimpleComponent implements OnInit {

  constructor( private route :Router) { }

  ngOnInit(): void {
  }

  ajouterouvrage(){
    this.route.navigate(["/ajouter-ouvrage"])
  }
  // consulterouvrage(){
  //   this.route.navigate(["/consulter-ouvrage"])
  // }
  archiverouvrage(){
    this.route.navigate(["/archiver-ouvrage"])
  }
  ModifierOuvrage(){
    this.route.navigate(["/modifier-ouvrage"])
  }
  Espaceadminsimple(){
    this.route.navigate(["/espace-admin-simple"])
  }

}
