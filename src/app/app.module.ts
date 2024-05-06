import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';

import { EspaceAdminSimpleComponent } from './espace-admin-simple/espace-admin-simple.component';
import { EspaceAdminPrincipaleComponent } from './espace-admin-principale/espace-admin-principale.component';
import { EmprunterOuvrageComponent } from './emprunter-ouvrage/emprunter-ouvrage.component';
import { ConsulterouvrageComponent } from './consulterouvrage/consulterouvrage.component';
import { AjouterOuvrageComponent } from './ajouter-ouvrage/ajouter-ouvrage.component';

import { ArchiverOuvrageComponent } from './archiver-ouvrage/archiver-ouvrage.component';

import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { ConsulterEtudiantComponent } from './consulter-etudiant/consulter-etudiant.component';

import { SupprimerEtudiantComponent } from './supprimer-etudiant/supprimer-etudiant.component';
import { ModifierOuvrageComponent } from './modifier-ouvrage/modifier-ouvrage.component';
import { RetournerOuvrageComponent } from './retourner-ouvrage/retourner-ouvrage.component';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEnseignantComponent } from './ajouter-enseignant/ajouter-enseignant.component';
import { SupprimerEnseignantComponent } from './supprimer-enseignant/supprimer-enseignant.component';
import { ConsulterEnseignantComponent } from './consulter-enseignant/consulter-enseignant.component';
import { EspaceEnseignantComponent } from './espace-enseignant/espace-enseignant.component';
import { AuthComponent } from './auth/auth.component';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { AuthEnseignantComponent } from './auth-enseignant/auth-enseignant.component';
import { ReserverOuvrageComponent } from './reserver-ouvrage/reserver-ouvrage.component';
import { AuthAdminPrincipaleComponent } from './auth-admin-principale/auth-admin-principale.component';
import { AuthAdminSimpleComponent } from './auth-admin-simple/auth-admin-simple.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthentificationAdminComponent } from './authentification-admin/authentification-admin.component';
const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
//   { path: 'espace-membre', component:EspaceMembreComponent },
//   { path: 'espace-admin-principale', component: EspaceAdminPrincipaleComponent },
//   { path: 'espace-admin-simple', component: EspaceAdminSimpleComponent },
//   { path: 'ajouter-etudiant', component:AjouterEtudiantComponent },
//   { path: 'consulter-etudiant', component:ConsulterEtudiantComponent },
//   { path: 'supprimer-etudiant', component: SupprimerEtudiantComponent },
//   { path: 'ajouter-ouvrage', component: AjouterEtudiantComponent },
//   { path: 'modifier-ouvrage', component: ModifierOuvrageComponent },
//   { path: 'archiver-ouvrage', component: ArchiverOuvrageComponent },
//   { path: 'ajouter-enseignant', component: AjouterEnseignantComponent },
//   { path: 'consulter-enseignant', component: ConsulterEnseignantComponent },
//   { path: 'supprimer-enseignant', component: SupprimerEnseignantComponent }
 ];
@NgModule ({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ArchiverOuvrageComponent,

    EspaceAdminSimpleComponent,
    EspaceAdminPrincipaleComponent,
    EmprunterOuvrageComponent,
    ConsulterouvrageComponent,
    AccueilComponent,
    AjouterOuvrageComponent,
    AjouterEtudiantComponent,
    ConsulterEtudiantComponent,
    SupprimerEtudiantComponent,
    ModifierOuvrageComponent,
    RetournerOuvrageComponent,
    AccueilComponent,
    AjouterEnseignantComponent,
    SupprimerEnseignantComponent,
    ConsulterEnseignantComponent,
    EspaceEnseignantComponent,
    AuthComponent,
    EspaceEtudiantComponent,
    AuthEnseignantComponent,
    ReserverOuvrageComponent,
    AuthAdminPrincipaleComponent,
    AuthAdminSimpleComponent,
    AuthentificationComponent,
    AuthentificationAdminComponent
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule { }
