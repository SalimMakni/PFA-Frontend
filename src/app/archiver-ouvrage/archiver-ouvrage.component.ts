import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archiver-ouvrage',
  templateUrl: './archiver-ouvrage.component.html',
  styleUrls: ['./archiver-ouvrage.component.css']
})
export class ArchiverOuvrageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  Espaceadminprincipale(){
    this.route.navigate(["/espace-admin-principale"])
  }
  Espaceadminsimple(){
    this.route.navigate(["/espace-admin-simple"])
  }
  Consulterouvrage(){
    this.route.navigate(["/consulter-ouvrage"])
  }

}
