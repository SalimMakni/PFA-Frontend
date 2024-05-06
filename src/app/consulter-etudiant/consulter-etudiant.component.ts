import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulter-etudiant',
  templateUrl: './consulter-etudiant.component.html',
  styleUrls: ['./consulter-etudiant.component.css']
})
export class ConsulterEtudiantComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  Espaceadminprincipale(){
    this.route.navigate(["/espace-admin-principale"])
  }
  Supprimeretudiant(){
    this.route.navigate(["/supprimer-etudiant"])
  }
}
