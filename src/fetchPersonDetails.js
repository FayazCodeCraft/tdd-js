//Fetch a person with id 3 using the following API:

//https://swapi.dev/api/people/3/

export function fetchPersonDetailsWithId3(){
  return fetch("https://swapi.dev/api/people/3/")
  .then((response)=>{
    return response.json()
  })
}

//Can you fetch the first person with id 1, and then 2, and 3 in sequence,
// and finally come up with an array that contains names of people with id 1, 2, 3, using  https://swapi.dev/api/people/<people id> API?

//1st approach

export function fetchPersonDetails() {
    let personsData = [];

    return fetch('https://swapi.dev/api/people/1/')
      .then((response) => response.json())
      .then((data) => {
        personsData.push({id:1,name:data.name});
        return fetch('https://swapi.dev/api/people/2/');
      })
      .then((response) => response.json())
      .then((data) => {
        personsData.push({id:2,name:data.name});
        return fetch('https://swapi.dev/api/people/3/');
      })
      .then((response) => response.json())
      .then((data) => {
        personsData.push({id:3,name:data.name});
        return personsData;
      })

}

//2nd approach

export function fetchPersonDetailsOptimized() {
  const ids = ["1", "2", "3"];
  const promises = ids.map((id) => {
    const url = `https://swapi.dev/api/people/${id}/`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => ({ id: id, name: data.name }));
  });
  return Promise.all(promises);
}




  