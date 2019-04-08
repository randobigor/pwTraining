import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
