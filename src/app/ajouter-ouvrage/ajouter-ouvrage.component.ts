import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-ouvrage',
  templateUrl: './ajouter-ouvrage.component.html',
  styleUrls: ['./ajouter-ouvrage.component.css']
})
export class AjouterOuvrageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  goToespaceadminprincipale(){
    this.route.navigate(["/espace-admin-principale"])
  }
 goToEspaceadminsimple(){
   this.route.navigate(["/espace-admin-simple"])
 }


}
