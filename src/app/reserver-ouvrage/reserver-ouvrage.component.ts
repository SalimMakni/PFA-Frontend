import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserver-ouvrage',
  templateUrl: './reserver-ouvrage.component.html',
  styleUrls: ['./reserver-ouvrage.component.css']
})
export class ReserverOuvrageComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  Espaceenseignant(){
    this.route.navigate(["/espace-enseignant"])
  }
  consulterouvrage(){
    this.route.navigate(["/consulter-ouvrage"])
  }
}
