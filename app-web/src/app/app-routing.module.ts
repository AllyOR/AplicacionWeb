import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { pagebol } from './components/Pagebol/Pagebol.component';

const routes: Routes = [
  //
  // {
  //   path: 'pagebol',
  //   component: pagebol
  // },
  // {
  //   path: 'about-us',
  //   component: AboutUsComponent
  // }
//
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


