import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FileuploadComponent} from './fileupload/fileupload.component';

const routes: Routes = [

  { path: 'fileUpload', component: FileuploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
