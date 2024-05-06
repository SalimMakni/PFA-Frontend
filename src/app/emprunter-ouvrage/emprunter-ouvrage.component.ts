import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emprunter-ouvrage',
  templateUrl: './emprunter-ouvrage.component.html',
  styleUrls: ['./emprunter-ouvrage.component.css']
})
export class EmprunterOuvrageComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
    EspaceEtudiant(){
      this.route.navigate(["/espace-etudiant"])
    }
    consulterouvrage(){
      this.route.navigate(["/consulter-ouvrage"])
    }


}
