import { char } from './chars.js';

let page = 'https://swapi.dev/api/people'

/*async*/ function fetchData(url){

    fetch(url) //'https://swapi.dev/api/people', 'https://swapi.dev/api/people/?page=2'
    .then(res =>
         {return res.json()}) //wait to receive data and then parse it
   
    .then(data => { //element is 0,1,2,... array index
        data.results.forEach((element,index) => {
            //display func
            let list = document.getElementById('myList')
            let li = document.createElement('li')
            li.innerText = element.name
            list.appendChild(li)
            li.addEventListener("click", function(){
                    let name = document.querySelectorAll('[id="name"]')//document.getElementById('name')
                    let gender = document.getElementById('gender')
                    let height = document.getElementById('height')
                    let image = document.getElementById('image')

                    name.forEach(i => {
                        i.innerText = element.name.toUpperCase();
                        
                    });
                   
                    gender.innerText = `Gender: ${element.gender.toUpperCase()}`; //element.gender
                    height.innerText = `Height: ${element.height.toUpperCase()}`;//element.height
                    image.src = char[index]
                    
                },false) //event: on click display img,name,height, and gender of selected item

            
        }); // end of foreach block

       if ( data.next ){
            fetchData(data.next)
        } //if there are next pages, display data
        
        
    }) // end of then block

    .catch(error =>{
        console.log(error) //handle possible errors
    }) 
}

fetchData(page); //invoke function




