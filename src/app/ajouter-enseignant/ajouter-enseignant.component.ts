import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-enseignant',
  templateUrl: './ajouter-enseignant.component.html',
  styleUrls: ['./ajouter-enseignant.component.css']
})
export class AjouterEnseignantComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {

  }
goToespaceadminprincipale(){
    this.route.navigate(["/espace-admin-principale"])
  }
  Auth(){
    this.route.navigate(["/"])
  }
  }
}
