import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-enseignant',
  templateUrl: './espace-enseignant.component.html',
  styleUrls: ['./espace-enseignant.component.css']
})
export class EspaceEnseignantComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  // EmprunterOuvrage(){
  //   this.route.navigate(["/emprunter-ouvrage"])
  // }
  // ConsulterOuvrage(){
  //   this.route.navigate(["/consulter-ouvrage"])
  // }
  // RetournerOuvrage(){
  //   this.route.navigate(["/retourner-ouvrage"])
  // }
  Authentifiaction(){
    this.route.navigate(["/auth"])
  }
}
