import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-admin-principale',
  templateUrl: './espace-admin-principale.component.html',
  styleUrls: ['./espace-admin-principale.component.css']
})
export class EspaceAdminPrincipaleComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  // goToadmin-principale(){
  //   this.route.navigate(["/admin-principale"])
  // }
  ajouteretudiant(){
    this.route.navigate(["/ajouter-etudiant"])
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
  Consulteretudiant(){
    this.route.navigate(["/consulter-etudiant"])
  }
  supprimereEtudiant(){
    this.route.navigate(["/supprimer-etudiant"])
  }

  ajouterenseignant(){
    this.route.navigate(["/ajouter-enseignant"])
  }
  consulterenseignant(){
    this.route.navigate(["/consulter-enseignant"])
  }
  supprimerenseignant(){
    this.route.navigate(["/supprimer-enseignant"])
  }
  ModifierOuvrage(){
    this.route.navigate(["/modifier-ouvrage"])
  }
  // Adminprincipale(){
  //   this.route.navigate(["/espace-admin-principale"])
  // }
}
