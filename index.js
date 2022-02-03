const message = document.querySelector(`#message`) //sets id="message" in html file to the variable message
const addMovie = (event) =>{ //create a function with a parameter of event 
    event.preventDefault()
    let inputField = document.querySelector(`input`) //assigns input in the HTML file to inputField (gives the input field a value)
    
    movie = document.createElement(`li`) //assigns movie to be a dynamic element we create which will be a list of items to be input by the user
    
    const movieTitle = document.createElement(`span`) //creates a span element with the var of movieTitle
    movieTitle.textContent = inputField.value  //gives the movieTitle a dynamic value
    movieTitle.addEventListener(`click`, crossOffMovie) //when the movieTitle registers a click it will callback the crossOffMovie function
    movie.appendChild(movieTitle) //sets the movieTitle as a child of movie
    
    const deleteBtn = document.createElement(`button`) //sets the <button></button> to the variable deleteBtn
    deleteBtn.textContent = `x` //puts a X on the website so that when you click it, it will complete the function added to deleteBtn
    deleteBtn.addEventListener(`click`, deleteMovie)//creates an event so when a click happens on the deleteBtn it will callback the deleteMovie function
    movie.appendChild(deleteBtn)//sets deleteBtn as a child of movie
    
    document.querySelector(`ul`).appendChild(movie)//sets movie as a child of the ul because li need a parent to function properly
    
    inputField.value = `` //sets the input value for the function to be a string
}
const deleteMovie = (event) =>{ //creates a function called deleteMovie with a parameter of event
    event.target.parentNode.remove() //sets the event to remove the
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!` //sets the content inside the variable message to be what is in the string.
    revealMessage() //callsback the revealMessage function
}

document.querySelector(`form`).addEventListener(`submit`, addMovie) //sets an addEventListener to the <form></form> and when something is submitted it will callback the function addMovie.

const crossOffMovie = (event) =>{ //creates a function with a parameter of event
    event.target.classList.toggle(`checked`) //this will allow you to toggle a line through the movie title on the webpage
    if(event.target.classList.contains(`checked`) /*.contains will return a boolean*/){ message.textContent = `${event.target.textContent} watched!`//is returned if the if statement condition is met
    }else{
        message.textContent = `${event.target.textContent} added back!`//if the condition in the if() statement isnt met this will be returned instead, which will uncheck the movie and return the above string.
    }
    revealMessage()//invokes the revealMessage function at the end
}

const revealMessage = () =>{  //creates a function called revealMessage
    message.classList.remove(`hide`) //will allow the message being returned to be removed/hidden so it will not stay shown on the webpage and the timeout time has passed
    setTimeout(() =>{ //function of setTimeout with no parameters needed and a function
        message.classList.add(`hide`) //after the timeout time has passed the message will be hidden
    }, 1000) //is the time in milliseconds that it takes for the function of setTimeout to complete, so in one second the message displayed will be hidden
}