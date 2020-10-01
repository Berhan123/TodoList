import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/gorev/list/list.component';
import { FormComponent } from './components/gorev/form/form.component';
import { ViewComponent } from './components/tur/view/view.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'gorev',
    loadChildren: () => import('./components/gorev/gorev.module').then(m => m.GorevModule)
  },
  {
    path: 'gorev',
    children: [
      { path: 'gAdd', component: FormComponent },
      { path: 'gList', component: ListComponent }
    ]
  },
  {
    path: 'tur',
    children: [
      { path: 'tList/:tAdi', component: ViewComponent }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
