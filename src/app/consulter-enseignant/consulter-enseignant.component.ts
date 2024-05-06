import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulter-enseignant',
  templateUrl: './consulter-enseignant.component.html',
  styleUrls: ['./consulter-enseignant.component.css']
})
export class ConsulterEnseignantComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToespaceadminprincipale(){
    this.route.navigate(["/espace-admin-principale"])
  }
  supprimerenseignant(){
    this.route.navigate(["/supprimer-enseignant"])
  }

}
