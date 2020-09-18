import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authorization',
    pathMatch: 'full'
  },
  {
    path: 'authorization',
    loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: '**',
    redirectTo: 'authorization',
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
