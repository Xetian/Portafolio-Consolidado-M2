let lista = document.getElementById("listaPokemon");

function consultarPokemon(id, num){
     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(function(response){
          response.json()
          .then(function(pokemon){
           pintarPokemon(pokemon, num);

    })
})
}

function randonPokemon(){
    let primerId = Math.round(Math.random()*750);
    let segundoId = Math.round(Math.random()*750);

    consultarPokemon(primerId, 1);
    consultarPokemon(segundoId, 2);

  }

function pintarPokemon(pokemon, num){
      let item = lista.querySelector(`#pokemon-${num}`);
      let imagen = item.getElementsByTagName("img")[0];
      imagen.setAttribute("src",pokemon.sprites.front_default)

      let nombre = item.getElementsByTagName("p")[0];
      nombre.textContent=pokemon.name;
}
randonPokemon();

//------------------------------------------------------------------------

document.querySelector("#buscar").addEventListener('click',function(){
  let num=document.getElementById("dato").value;
  obtenerdatos(num);
})


function obtenerdatos(valor){
let url = `https://pokeapi.co/api/v2/pokemon/${valor}`;
const api = new XMLHttpRequest();
api.open('GET',url,true);
api.send();

api.onreadystatechange = function(){
  if (this.status==200 && this.readyState==4){
      let poke= JSON.parse(this.responseText);
      console.log(poke);
      let imagen1 = document.getElementById("pintar1");
      let imagen2 = document.getElementById("pintar2");
      imagen1.setAttribute("src",poke.sprites.front_default);
      imagen2.setAttribute("src",poke.sprites.back_default);

      let nombre = document.getElementById("nom1");
      nombre.innerHTML="Nombre : "+poke.species.name;
      let tipo = document.getElementById("tipo");
      tipo.innerHTML="Tipo : "+poke.types[0].type.name;

      let habilidad1 = document.getElementById("hab1");
      habilidad1.innerHTML="Habilidad-1 : "+poke.abilities[0].ability.name;
      let habilidad2 = document.getElementById("hab2");
      habilidad2.innerHTML="Habilidad-2 : "+poke.abilities[1].ability.name;
 }else{
        nombre.innerHTML="Fallo  : status != 200";
        habilidad1.innerHTML="Fallo  : readySate != 4";
 }
  
}


}

