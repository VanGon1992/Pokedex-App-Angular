import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FormFatherComponent } from './formulario/form-father/form-father.component';
import { UserSonComponent } from './formulario/user-son/user-son.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    FiltroPipe,
    PokemonDetailComponent,
    FormFatherComponent,
    UserSonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonModule { 

  

  getPokemonDetail(){

  }


}
