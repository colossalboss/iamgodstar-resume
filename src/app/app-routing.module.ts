import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EducationComponent } from './education/education.component';
import { slideInAnimation } from './animation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path: "", component: WelcomeComponent, data: {animation: 'WelcomePage'}},
  {path: "education", component: EducationComponent, data: {animation: 'EducationPage'}},
  {path: "work", component: WorkComponent, data: {animation: 'WorkPage'}},
  {path: "projects", component: ProjectsComponent, data: {animation: 'ProjectsPage'}},
  {path: "skills", component: SkillsComponent, data: {animation: 'SkillsPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
