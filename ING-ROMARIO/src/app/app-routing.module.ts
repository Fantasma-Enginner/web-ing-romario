import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:NavbarComponent},
  {path:'projects',component:ProyectsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'curses',component:CoursesComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routerComponests = [NavbarComponent,ProyectsComponent,SkillsComponent,CoursesComponent,
                                 ContactComponent,BlogComponent];
