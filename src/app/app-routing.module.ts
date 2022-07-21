import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'layout',
    loadChildren:()=> import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {path: '', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
