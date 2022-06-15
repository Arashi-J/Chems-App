import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AreasListComponent } from './pages/areas-list/areas-list.component';
import { ChemicalsListComponent } from './pages/chemicals-list/chemicals-list.component';
import { MainComponent } from './pages/main/main.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'areas', component: AreasListComponent },
      { path: 'chemicals', component: ChemicalsListComponent },
      { path: 'users', component: UsersListComponent },
      {path: '', redirectTo: '', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
