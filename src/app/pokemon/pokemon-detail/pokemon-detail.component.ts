import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon: [] = []
  private detailUrl: string = 'https://pokeapi.co/api/v2/pokemon/name'


  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  getPokemonDetail(pokemon: any){
    console.log(pokemon);
  }

  
}
