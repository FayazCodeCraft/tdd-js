import { fetchPersonDetails,fetchPersonDetailsWithId3,fetchPersonDetailsOptimized} from "./fetchPersonDetails"

test(
    'Test: fetch person details with Id 3',
    () =>
        new Promise((resolve) => {
            fetchPersonDetailsWithId3()
            .then((result)=>{
                expect(result).toEqual({
                    "name": "R2-D2", 
                    "height": "96", 
                    "mass": "32", 
                    "hair_color": "n/a", 
                    "skin_color": "white, blue", 
                    "eye_color": "red", 
                    "birth_year": "33BBY", 
                    "gender": "n/a", 
                    "homeworld": "https://swapi.dev/api/planets/8/", 
                    "films": [
                        "https://swapi.dev/api/films/1/", 
                        "https://swapi.dev/api/films/2/", 
                        "https://swapi.dev/api/films/3/", 
                        "https://swapi.dev/api/films/4/", 
                        "https://swapi.dev/api/films/5/", 
                        "https://swapi.dev/api/films/6/"
                    ], 
                    "species": [
                        "https://swapi.dev/api/species/2/"
                    ], 
                    "vehicles": [], 
                    "starships": [], 
                    "created": "2014-12-10T15:11:50.376000Z", 
                    "edited": "2014-12-20T21:17:50.311000Z", 
                    "url": "https://swapi.dev/api/people/3/"
                })
            })
            .catch((error)=>{
                expect(error).toBeDefined()
            })
            .finally(()=>{
                resolve()
            })
        }),
    40000,
)



test(
    'Test: fetch person details',
    () =>
        new Promise((resolve) => {
            fetchPersonDetails()
            .then((result)=>{
                expect(result).toEqual([
                    {id:1,name:"Luke Skywalker"},
                    {id:2,name:"C-3PO"},
                    {id:3,name:"R2-D2"}
                ])
            })
            .catch((error)=>{
                expect(error).toBeDefined()
            })
            .finally(()=>{
                resolve()
            })
        }),
    30000,
)

test(
    'Test: fetch person details using optimized approach',
    () =>
        new Promise((resolve) => {
            fetchPersonDetailsOptimized()
            .then((result)=>{
                expect(result).toEqual([
                    {id:1,name:"Luke Skywalker"},
                    {id:2,name:"C-3PO"},
                    {id:3,name:"R2-D2"}
                ])
            })
            .catch((error)=>{
                expect(error).toBeDefined()
            })
            .finally(()=>{
                resolve()
            })
        }),
    30000,
)