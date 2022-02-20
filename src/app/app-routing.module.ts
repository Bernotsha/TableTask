import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridTableComponent } from './components/grid-component/grid-component';
import { HomeComponent } from './components/home-component/home-component';
import { MatTableComponent } from './components/mat-component/mat-component';

const routes: Routes = [
  { path: 'mat-table', component: MatTableComponent},
  { path: 'ag-grid', component:GridTableComponent},
  { path: '',component:HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
