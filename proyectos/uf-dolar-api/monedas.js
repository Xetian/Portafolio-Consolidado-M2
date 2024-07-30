//API PARA RESCATAR DATOS ACTUALIZADOS DE LA UF Y EL DOLAR


document.querySelector('#dolar').addEventListener('click',function(){
    obtenerdatos('dolar');
})

document.querySelector('#uf').addEventListener('click',function(){
    obtenerdatos('uf');
})


function obtenerdatos(valor){
let url = `https://mindicador.cl/api/${valor}`;
const api = new XMLHttpRequest();
api.open('GET',url,true);
api.send();

api.onreadystatechange = function(){
    if (this.status==200 && this.readyState==4){
        let datos= JSON.parse(this.responseText);
        let resultado = document.querySelector('#resultado');
         //console.log(datos);
        resultado.innerHTML='';

        for (let item of datos.serie){
            
            resultado.innerHTML +=`<li class="list-group-item">${item.fecha.substr(0,10)} ||  ${item.valor}</li>`;
        }

    }
}


}

