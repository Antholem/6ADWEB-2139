import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path: 'about', component:AboutComponent},
                        {path: 'skills', component:SkillsComponent},
                        {path: 'portfolio', component:PortfolioComponent},
                        {path: 'contact', component:ContactComponent},
                        {path: 'home', component:HomeComponent},
                        {path: '', component:HomeComponent},
                        {path: '**', component:PagenotfoundComponent}
                      ];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],

 
})
export class AppRoutingModule { }