import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supprimer-enseignant',
  templateUrl: './supprimer-enseignant.component.html',
  styleUrls: ['./supprimer-enseignant.component.css']
})
export class SupprimerEnseignantComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  Adminprincipale(){
    this.route.navigate(["/espace-admin-principale"])
  }
  consulterenseignant(){
    this.route.navigate(["/consulter-enseignant"])
  }
}
