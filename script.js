import { char } from './chars.js'; //import character images from char.js file

let page = 'https://swapi.dev/api/people'

/*async*/ function fetchData(url){

    fetch(url) //fetch data from url
    .then(res =>
         {return res.json()}) //wait to receive data and then parse it
   
    .then(data => { // perform logic on data
        data.results.forEach((element,index) => {
            //element is 0,1,2... i.e array[index]
            let list = document.getElementById('myList') //get parent element <ul>
            let li = document.createElement('li') // create child element <li>
            li.innerText = element.name // set li innertext
            list.appendChild(li) //append <li> element to parent element <ul>
            li.addEventListener("click", function(){      //add an event to <li> element
                    let name = document.querySelectorAll('[id="name"]')//get all elements with name id and store it in name variable
                    let gender = document.getElementById('gender') //get element with gender id and store it in gender variable
                    let height = document.getElementById('height') //get element with height id and store it in height variable
                    let image = document.getElementById('image') //get element with image id and store it in an image variable

                    name.forEach(i => {
                        i.innerText = element.name.toUpperCase(); //for each element with name id, let its innertext equals the name of character
                        
                    });
                   
                    gender.innerText = `Gender: ${element.gender.toUpperCase()}`; 
                    height.innerText = `Height: ${element.height.toUpperCase()}`;
                    image.src = char[index] //maps data.results index to char array in chars.js file
                    
                },false) //event: on click display img,name,height, and gender of selected character

            
        }); // end of foreach block

       if ( data.next ){
            fetchData(data.next)
        } //if there are next pages, invoke funtion again and again
        
        
    }) // end of then block

    .catch(error =>{
        console.log(error) //handle possible errors
    }) 
}

fetchData(page); //invoke function




