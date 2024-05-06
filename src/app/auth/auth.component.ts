import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToespaceetudiant(){
    this.route.navigate(["/espace-etudiant"])
  }
  
  EmprunterOuvrage(){
    this.route.navigate(["/emprunter-ouvrage"])
  }
  ConsulterOuvrage(){
    this.route.navigate(["/consulter-ouvrage"])
  }

  RetournerOuvrage(){
    this.route.navigate(["/retourner-ouvrage"])
  }
}
