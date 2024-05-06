import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retourner-ouvrage',
  templateUrl: './retourner-ouvrage.component.html',
  styleUrls: ['./retourner-ouvrage.component.css']
})
export class RetournerOuvrageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  Espaceadminsimple(){
    this.route.navigate(["/espace-etudiant"])
  }
}
