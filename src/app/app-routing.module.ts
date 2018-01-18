import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
