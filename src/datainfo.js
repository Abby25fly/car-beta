const DataInfo ={
    DetailInsurance :[
    
    {
        nameDamage:"Desbarranco",
        damage:"Daño total del vehículo",
        description:"Su seguro le devuelve un nuevo vehículo con las características dadas al momento de la adquisición del seguro.",
        solutions:[0,1,3,4,5],
        id:1
    },
    {
        nameDamage: "Avería Mecánica",
        damage:"Falla mecánica",
        description: "Su seguro le garantiza la reparación total del auto, enviandole un mecánico a su ubicación y/o grúa de ser necesario.",
        solutions:[0,1,3],
        id: 2
    },
    {
        nameDamage: "Choque provocado por el conductor",
        damage:"Daño Propio",
        description: "Cubre los daños o pérdidas que sufra el vehículo asegurado por las maniobras hechas por el conductor: rotura de lunas y accesorios musicales.",
        solutions:[0,1,3,5],
        id: 3
    },
    {
        nameDamage: "Choque Frontal",
        damage:"Accidente de los ocupantes",
        description: "Su seguro responderá por las coberturas de gastos de curación de los ocupantes del vehículo asegurado y de los daños ocasionados al vehiculo.",
        solutions:[0,4,5],
        id: 4
    },
    {
        nameDamage: "Volcadura",
        damage:"Daño por despite o imperfecto mecánico",
        description: "Su seguro responderá por las coberturas de muerte, invalidez permanente total o parcial y gastos de curación de los ocupantes del vehículo asegurado hasta los límites indicados en las Condiciones Particulares cuando hayan sido contratadas, como consecuencia de un accidente ocasionado por el vehículo asegurado descrito en la póliza. La cobertura de Accidentes de Ocupantes solo se activará cuando el vehículo asegurado participe en un accidente durante su circulación y siempre y cuando el siniestro se encuentre cubierto por la póliza.",
        solutions:[1,4,5],
        id: 5
    },
    {
        nameDamage:"Daño a terceros",
        damage:"Accidente que involucre a terceros",
        description:"Cubre la responsabilidad civil extracontractual en que incurra el Asegurado o cualquier otra persona que durante la circulación del vehículo asegurado con autorización de este último, ocasiones lesiones y/o daños materiales a personas o cosas que se encuentren fuera de él como consecuencia de un accidente o serie de accidentes emanados en un solo suceso o acontecimiento.",
        solutions:[0,1,4],
        id:6
    }


],
    Solutions: ["Servicio Mecánico", "Servicio de Grúa","Chofer de reemplazo", "Carro de reemplazo","Asistente de la Positiva Seguros al lugar del incidente","Ambulancia"]
}
export default DataInfo;