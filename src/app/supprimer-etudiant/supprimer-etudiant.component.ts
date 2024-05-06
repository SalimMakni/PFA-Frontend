import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supprimer-etudiant',
  templateUrl: './supprimer-etudiant.component.html',
  styleUrls: ['./supprimer-etudiant.component.css']
})
export class SupprimerEtudiantComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  Adminprincipale(){
    this.route.navigate(["/espace-admin-principale"])
  }
  Consulteretudiant(){
    this.route.navigate(["/consulter-etudiant"])
  }
}
