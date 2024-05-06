import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.css']
})
export class EspaceEtudiantComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  Authentifiaction(){
    this.route.navigate(["/auth"])
  }
}

