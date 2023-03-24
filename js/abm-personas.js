let array = JSON.parse(localStorage.getItem('personas')) || [];

function agregarPersona() {
    console.log('funciona');

    const dni = document.getElementById('dni');
    const nombre = document.getElementById('nombre');
    /*    
    const existe = array.findIndex(p => p.dni === dni.value);
    if(existe){
        alert(`el dni: ${dni.value} ya existe`) ;
        return;
    }
    */
    const p ={
        id:Math.random(),
        dni: dni.value,
        nombre: nombre.value

    };

    array.push(p);

    actualizarStoragePersonas(array);

    

    // invoco al componenete de listar  
    ListadoPersona(array);

    dni.value='';
    nombre.value='' ;
    dni.focus ;
    
}
function actualizarStoragePersonas(array){

    localStorage.setItem('personas',JSON.stringify(array)); // Guarda array en memoria

}
function ListadoPersona(props) {

    const listado =document.getElementById('listado');

    listado.innerHTML = '' ;
    // varios elemntos a mostrar
    /*for(let persona of props){
        listado.innerHTML+=persona.dni +'-' + persona.nombre + "<br>";
    }*/
    let tablaPersona =`
    <table border='1' width='100%'>
        <tr>
            <th>
                DNI
            </th>
            <th>
                NOMBRE
            </th>
        </tr>`;
    for(let persona of props){
        tablaPersona+=RowPersona(persona) ;
    }

    
    const cierreTablaPersona=
    `<tfoot>
            <tr>
                <td colspan='2'>
                Total= ${props.length}
                </td>
            </tr>
    </table>` ;

    listado.innerHTML=tablaPersona + cierreTablaPersona;
   
}
const eliminarPersona = (id) => {

    alert(id);
    array = array.filter(x => x.id !== id);
    actualizarStoragePersonas(array);
    ListadoPersona(array);

}
function RowPersona(persona) {
    
    return `
    <tr class="rowpersona" id="${persona.id}">
        <td>${persona.dni}
        </td>
        <td>${persona.nombre}
        </td>
        <td>
            <button onclick="eliminarPersona(${persona.id})">
                Eliminar
            </button>
        </td>
        <td>
            <button onclick="editar(${persona.id})">
                Editar
            </button>
        </td>

    </tr> `
    
    ;
}
// ni bien carga invoco el listado
ListadoPersona(array);

function editar(id){
    idx = array.findIndex(p => p.id===id) ;
    if (idx>=0){
        const p = array[idx];
        const dni = document.getElementById('dni');
        dni.value = p.dni ;
        const nombre = document.getElementById('nombre');
        nombre.value = p.nombre ;
        
    }
}
