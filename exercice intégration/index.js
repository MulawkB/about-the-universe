const options = ["people", "planets", "starships"];

options.forEach((value) => {
    console.log(value)
    fetch(`https://swapi.dev/api/${value}`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response.count);
            document.querySelector(`#${value}`).textContent = response.count;
        })
});

// function request() {

// const APIurl = `https://swapi.dev/${f}`;

// fetch(APIurl)
//     .then((response) => response.json())
//     .then((response) => {
//         console.log(response.count);
//     })


// }
// fetch("https://dog.ceo/api/breeds/list/all")
// .then((response) => response.json())
// .then((response) => {
//   console.log(response.count);
//   document.querySelector('#id').textContent = response.count;
// });
