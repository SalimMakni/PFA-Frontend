import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  goToespaceadminprincipale(){
    this.route.navigate(["/espace-admin-principale"])
  }
  goToespaceadminsimple(){
    this.route.navigate(["/espace-admin-simple"])
  }
}
