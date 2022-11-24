import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadFileComponent } from './pages/read-file/read-file.component';

const routes: Routes = [
  {path: '', component: ReadFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
