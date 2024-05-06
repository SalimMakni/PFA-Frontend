import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
// import { AjouterOuvrageComponent } from './ajouter-ouvrage/ajouter-ouvrage.component';

// import { ArchiverOuvrageComponent } from './archiver-ouvrage/archiver-ouvrage.component';
// import { ConsulterEtudiantComponent } from './consulter-etudiant/consulter-etudiant.component';
// import { ConsulterouvrageComponent } from './consulterouvrage/consulterouvrage.component';
// import { EmprunterOuvrageComponent } from './emprunter-ouvrage/emprunter-ouvrage.component';
// import { EspaceAdminPrincipaleComponent } from './espace-admin-principale/espace-admin-principale.component';
// import { EspaceAdminSimpleComponent } from './espace-admin-simple/espace-admin-simple.component';
// import { EspaceMembreComponent } from './espace-membre/espace-membre.component';
// import { SupprimerEtudiantComponent } from './supprimer-etudiant/supprimer-etudiant.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue dans notre bibliothéque numérique';
}
// @Component({
//   selector: 'app-accueil',
//   templateUrl: './accueil.component.html',
//   styleUrls: ['./accueil.component.css']
// })
// export class AccueilComponent implements OnInit {

//   constructor(private route :Router) { }
//   ngOnInit(): void {
//   }
// Accueil(){
//   this.route.navigate(["/accueil"])
// }
// @AccueilComponent({
//   selector: 'app-accueil',
//   templateUrl: './app.accueil.html',
//   styleUrls: ['./app.accueil.css']
// })

// // @AjouterEtudiantComponent({
//   selector: 'app-ajouter-etudiant',
//   templateUrl: './ajouter-etudiant.component.html',
//   styleUrls: ['./ajouter-etudiant.component.css']
// })
// @AjouterOuvrageComponent({
//   selector: 'app-ajouter-ouvrage',
//   templateUrl: './ajouter-ouvrage.component.html',
//   styleUrls: ['./ajouter-ouvrage.component.css']
// })
// @ArchiverOuvrageComponent({
//   selector: 'app-archiver-ouvrage',
//   templateUrl: './archiver-ouvrage.component.html',
//   styleUrls: ['./archiver-ouvrage.component.css']
// })
// @ConsulterEtudiantComponent ({
//   selector: 'app-consulter-etudiant',
//   templateUrl: './consulter-etudiant.component.html',
//   styleUrls: ['./consulter-etudiant.component.css']
// })
// @ConsulterouvrageComponent({
//   selector: 'app-consulterouvrage',
//   templateUrl: './consulterouvrage.component.html',
//   styleUrls: ['./consulterouvrage.component.css']
// })
// @EmprunterOuvrageComponent({
//   selector: 'app-emprunter-ouvrage',
//   templateUrl: './emprunter-ouvrage.component.html',
//   styleUrls: ['./emprunter-ouvrage.component.css']
// })
// @ EspaceAdminPrincipaleComponent({
//   selector: 'app-espace-admin-principale',
//   templateUrl: './espace-admin-principale.component.html',
//   styleUrls: ['./espace-admin-principale.component.css']
// })
// @ EspaceAdminSimpleComponent({
//   selector: 'app-espace-admin-simple',
//   templateUrl: './espace-admin-simple.component.html',
//   styleUrls: ['./espace-admin-simple.component.css']
// })
// @EspaceMembreComponent({
//   selector: 'app-espace-membre',
//   templateUrl: './espace-membre.component.html',
//   styleUrls: ['./espace-membre.component.css']
// })
// @SupprimerEtudiantComponent({
//   selector: 'app-supprimer-etudiant',
//   templateUrl: './supprimer-etudiant.component.html',
//   styleUrls: ['./supprimer-etudiant.component.css']
// })
