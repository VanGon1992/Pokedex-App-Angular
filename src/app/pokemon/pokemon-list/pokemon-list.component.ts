import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from './../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons: Pokemon[] = []
  public page: number = 0
  public search: string = ''
 

  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
    this.PokemonService.getAllPokemons()
    .subscribe(
      pokemons => {
        this.pokemons = pokemons;
      }
    )
  }

  nextPage(){
    this.page += 5
  }

  prevPage(){
    if(this.page > 0)
    this.page -= 5
  }

  onSearchPokemon(search: string){
    this.page = 0
    this.search = search
  }


}
