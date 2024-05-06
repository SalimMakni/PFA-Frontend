import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth-enseignant',
  templateUrl: './auth-enseignant.component.html',
  styleUrls: ['./auth-enseignant.component.css']
})
export class AuthEnseignantComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  ConsulterOuvrage(){
    this.route.navigate(["/consulter-ouvrage"])
  }
}
