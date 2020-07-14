import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AddboookComponent } from './addboook/addboook.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditbookComponent } from './editbook/editbook.component';

const routes: Routes = [
  { path: '', component: BooklistComponent },
  { path: 'add-book', component: AddboookComponent },
  { path: 'edit-book/:id', component: EditbookComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
