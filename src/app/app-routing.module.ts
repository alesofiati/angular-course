import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { Injectable, NgModule } from "@angular/core";
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from "@angular/router";
import { Title } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})

export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title){
    super()
  }

  override updateTitle(routeState: RouterStateSnapshot): void {
    const title = this.buildTitle(routeState)
    if(title !== undefined){
      this.title.setTitle(`Curso Angular | ${title}`)
    }
  }

}

const routes: Routes = [
  { path: '', title: 'Home', component: FirstComponentComponent },
  { path: 'animais', title: 'Lista de Animais', component: ListRenderComponent },
  { path: 'sorteio', title: 'Sorteio', component: EmitterComponent }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy}
  ]
})

export class AppRoutingModule {}
