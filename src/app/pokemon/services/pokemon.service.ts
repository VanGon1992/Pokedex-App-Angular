import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchAllPokemonsResponse, Pokemon } from '../models/pokemon.model';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }


  getAllPokemons(): Observable<Pokemon[]>{
    return this.http.get<FetchAllPokemonsResponse>(`${this.baseUrl}/pokemon?limit=150`)
    .pipe(
      map(this.transformSmallPokemonIntoPokemon)
    )
  }

  private transformSmallPokemonIntoPokemon(res: FetchAllPokemonsResponse): Pokemon[]{
    const pokemonList: Pokemon[] = res.results.map(poke =>{
      const urlArr = poke.url.split('/')
      const id = urlArr[6]
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

      return{
        id,
        image,
        name: poke.name
      }

    })
    return pokemonList;
  }

}

