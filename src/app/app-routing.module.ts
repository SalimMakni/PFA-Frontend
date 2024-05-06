import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { AjouterEnseignantComponent } from './ajouter-enseignant/ajouter-enseignant.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { AjouterOuvrageComponent } from './ajouter-ouvrage/ajouter-ouvrage.component';

import { ArchiverOuvrageComponent } from './archiver-ouvrage/archiver-ouvrage.component';
import { AuthAdminPrincipaleComponent } from './auth-admin-principale/auth-admin-principale.component';
import { AuthAdminSimpleComponent } from './auth-admin-simple/auth-admin-simple.component';
import { AuthEnseignantComponent } from './auth-enseignant/auth-enseignant.component';
import { AuthComponent } from './auth/auth.component';
import { ConsulterEnseignantComponent } from './consulter-enseignant/consulter-enseignant.component';
import { ConsulterEtudiantComponent } from './consulter-etudiant/consulter-etudiant.component';
import { ConsulterouvrageComponent } from './consulterouvrage/consulterouvrage.component';
import { EmprunterOuvrageComponent } from './emprunter-ouvrage/emprunter-ouvrage.component';
import { EspaceAdminPrincipaleComponent } from './espace-admin-principale/espace-admin-principale.component';
import { EspaceAdminSimpleComponent } from './espace-admin-simple/espace-admin-simple.component';
import { EspaceEnseignantComponent } from './espace-enseignant/espace-enseignant.component';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { ModifierOuvrageComponent } from './modifier-ouvrage/modifier-ouvrage.component';
import { ReserverOuvrageComponent } from './reserver-ouvrage/reserver-ouvrage.component';

import { SupprimerEnseignantComponent } from './supprimer-enseignant/supprimer-enseignant.component';
import { SupprimerEtudiantComponent } from './supprimer-etudiant/supprimer-etudiant.component';


const routes: Routes = [
  // {path:"user", component:UserComponent},
  // {path:"admin-principale", component:AdminPrincipaleComponent},
  // {path:"admin-simple", component:AdminSimpleComponent},
  {path:"accueil",  component:AccueilComponent},
  {path:"espace-etudiant",  component:EspaceEtudiantComponent},
  {path:"auth",  component:AuthComponent},
  {path:"espace-enseignant", component:EspaceEnseignantComponent},
  {path:"espace-admin-principale", component:EspaceAdminPrincipaleComponent},
  {path:"espace-admin-simple", component:EspaceAdminSimpleComponent},
  {path:"emprunter-ouvrage" , component:EmprunterOuvrageComponent},
  {path:"consulter-ouvrage" , component:ConsulterouvrageComponent},
  {path:"archiver-ouvrage" , component:ArchiverOuvrageComponent},
  {path:"ajouter-ouvrage" , component:AjouterOuvrageComponent},
  {path:"ajouter-etudiant" , component:AjouterEtudiantComponent},
  {path:"consulter-etudiant" , component:ConsulterEtudiantComponent},
  {path:"supprimer-etudiant" , component:SupprimerEtudiantComponent},
  {path:"supprimer-enseignant" , component:SupprimerEnseignantComponent},
  {path:"ajouter-enseignant" , component:AjouterEnseignantComponent},
  {path:"consulter-enseignant" , component:ConsulterEnseignantComponent},
  {path:"auth-enseignant" , component:AuthEnseignantComponent},
  {path:"modifier-ouvrage" , component:ModifierOuvrageComponent},
  {path:"auth-admin-principale" , component:AuthAdminPrincipaleComponent},
  {path:"auth-admin-simple" , component:AuthAdminSimpleComponent},
  {path:"reserver-ouvrage" , component:ReserverOuvrageComponent}
];
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
   })

   export class AppRoutingModule { }
