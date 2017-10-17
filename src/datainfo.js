const DataInfo ={
    DetailInsurance :[
    
    {
        nameDamage:"Desbarranco",
        damage:"Daño total del vehículo",
        description:"Le devuelve un nuevo vehículo con las características dadas al momento de la adquisición del seguro.",
        solutions:[0,1,3,4,5],
        id:1
    },
    {
        nameDamage: "Avería Mecánica",
        damage:"Falla mecánica",
        description: "Le garantiza la reparación total de su vehículo, enviandole un mecánico a su ubicación y/o grúa de ser necesario.",
        solutions:[0,1,3],
        id: 2
    },
    {
        nameDamage: "Choque provocado por el conductor",
        damage:"Daño Propio",
        description: "Cubre los daños o pérdidas que sufra su vehículo: rotura de lunas y accesorios musicales.",
        solutions:[0,1,3,5],
        id: 3
    },
    {
        nameDamage: "Choque Frontal",
        damage:"Accidente de los ocupantes",
        description: "Responderá por las coberturas de gastos de curación de los ocupantes de su vehículo y de los daños ocasionados.",        
        solutions:[0,4,5],
        id: 4
    },
    {
        nameDamage: "Volcadura",
        damage:"Daño por despite o imperfecto mecánico",
        description: "Responderá por las coberturas de muerte, invalidez permanente total o parcial y gastos de curación de los ocupantes de su vehículo hasta los límites indicados en las Condiciones Particulares cuando hayan sido contratadas, como consecuencia de un accidente ocasionado por su vehículo.",
        solutions:[1,4,5],
        id: 5
    },
    {
        nameDamage:"Daño a terceros",
        damage:"Accidente que involucre a terceros",
        description:"Cubre la responsabilidad civil extracontractual en que incurra usted o cualquier otra persona que durante la circulación de su vehículo asegurado con autorización de este último, ocasiones lesiones y/o daños materiales a personas o cosas que se encuentren fuera de él como consecuencia de un accidente o serie de accidentes emanados en un solo suceso o acontecimiento.",
        solutions:[0,1,4],
        id:6
    }


],
    Solutions: ["Servicio Mecánico", "Servicio de Grúa","Chofer de reemplazo", "Carro de reemplazo","Asistente de la Positiva Seguros al lugar del incidente","Ambulancia"]
}
export default DataInfo;