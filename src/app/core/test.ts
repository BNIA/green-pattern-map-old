let points:any[] = [
    {
        type:"Feature",
        geometry:{
            "type":"Point",
            "coordinates":[-76.649809, 39.322751]
        }
    },
    {
        type:"Feature",
        geometry:{
            "type":"Point",
            "coordinates":[-76.623191, 39.301438]
        }
    },
    {
        type:"Feature",
        geometry:{
            "type":"Point",
            "coordinates":[-76.593789, 39.283598]
        }
    }
]

let poly:any[] = [
    {
        type:"Feature",
        geometry:{
            "type":"Polygon",
            "coordinates":[[[-76.617820, 39.311326],[-76.615610, 39.318315],[-76.619526, 39.318896],[-76.617820, 39.311326]]]
        }
    },
    {
        type:"Feature",
        geometry:{
            "type":"Polygon",
            "coordinates":[[[-76.619730, 39.320390],[-76.621211, 39.322490],[-76.625996, 39.319552],[-76.619730, 39.320390]]]
        }
    },
]

export {points};
export {poly};
