import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulterouvrage',
  templateUrl: './consulterouvrage.component.html',
  styleUrls: ['./consulterouvrage.component.css']
})
export class ConsulterouvrageComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {}
    Espaceetudiant(){
      this.route.navigate(["/espace-etudiant"])
    }
    Archiverouvrage(){
      this.route.navigate(["/archiver-ouvrage"])
    }
    Emprunterouvrage(){
      this.route.navigate(["/emprunter-ouvrage"])
    }
}
