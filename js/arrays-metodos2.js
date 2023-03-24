const miEdad = 37; //variable de tipo number

// variable de tipo object
const persona = {//persona es un objeto
    salario: [100,200,300,400],
    edad:miEdad,//es una variable de tipo number
    apellido: 'apellido',//es una variable de tipo string
    direcciones: [//direcciones es un array de objetos
        {
            tipo: 'laboral',
            calle: 'calle 13',
            active: false
        },
        {
            tipo: 'laboral',
            calle: 'calle 130',
            active: true
        },
        {
            tipo: 'fiscal',
            calle: 'calle 14',
            active: true
        }
    ],
    masDireccion: {
        laboral: {
            tipo: 'laboral',
            calle: 'calle 130',
            active: true
        },
        fiscal: {
            tipo: 'fiscal',
            calle: 'calle 14',
            active: true
        }
    }
};

//obtener las direcciones activas 
// atributo : direcciones
const nombres = ['agustina','vicente','daniel'];
//               'AGUSTINA', 'VICENTE', 'DANIEL' 
const nombreMapeados = nombres.map(nombre => nombre.toUpperCase()); //lambda | funcione flecha | arrow function
console.log(nombreMapeados);
/*
function algo(a,b,c) {console.log(a,b,c)};
algo = function (a,b,c) {console.log(a,b,c)};
(x,y,c)=> {console.log(a,b,c)}
*/

const direccionesMapped = persona.direcciones.map(x=> 
    {
        return {
            a: x.tipo,
            b: x.calle
        }
    }
);

console.log(direccionesMapped);

//SI QUIERO SUMAR LOS DATOS
//for ok
let suma = 0;
persona.salario.forEach(element => {
    suma += element;
});

console.log('suma comun', suma);

suma = persona.salario.reduce( (ant,act) => act + ant , 0 );
console.log('suma reduce',suma);