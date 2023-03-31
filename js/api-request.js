// cuando hago una api externa debo usar async en la firma de la funcion

const apiUrlBase ='https://reqres.in/api';
const   findUsers = async () => {
    //debugger ;
    const response = await fetch(`${apiUrlBase}/users`) ; //promise
    const jsonObject = await response.json();
    console.log(response, jsonObject);
    ListadoUsuariosComponent(jsonObject.data);
    
}
const btn = document.getElementById('btnFindUsers');
btn.addEventListener('click',findUsers);
