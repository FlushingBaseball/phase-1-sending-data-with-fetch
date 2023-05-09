const newli = document.createElement('li');
const form = document.querySelector('body');
//Add your code herefunctio
const formData = {
    dogName: 'Byron',
    dogBreed: "Poodle"
    
};

const configurationObject ={

    method: 'POST',
    headers: { "Content-Type": "application/json",
    "Accept": "application/json",
    },
    body: JSON.stringify(formData),
    
    
};

fetch('http://localhost:3000/dogs', configurationObject)
    .then(function (response){
        return response.json();
     })
     .then(function (object){
        console.log(object)
     })
     .catch(function (error){
        alert("Bad things! Ragnarok!");
        console.log(error.message);
     });
     
     
     
     
     function submitData(username, email){
         
         return fetch('http://localhost:3000/users',{
             method: 'POST',
             headers: {
                 "Content-Type": "application/json",
    "Accept": "application/json"

},
body: JSON.stringify({
    name : username,
    email: email
})

})
.then(resp => resp.json())
.then(data => {
    newli.textContent = data.id
    form.appendChild(newli)
    
})
.catch(function (error){
    //  alert("Bad things! Ragnarok!");
    
    const errorli = document.createElement('li');
    errorli.textContent = error
    form.appendChild(errorli)
  
});
}


submitData('joe', 'joe@sample.com')