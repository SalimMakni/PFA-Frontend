import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
//  goToespaceadminprincipale(){
//    this.route.navigate(["/espace-admin-principale"])
//  }
//  goToespaceadminsimple(){
//   this.route.navigate(["/espace-admin-simple"])
// }
// goToespacemembre(){
//   this.route.navigate(["/espace-membre"])
// }
// goToaccueil(){
//   this.route.navigate(["/accueil"])
// }
}
