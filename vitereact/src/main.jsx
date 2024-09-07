import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
   return (
       <div>
         <h1>Custom App !</h1>
    
       </div>
   )
}



const AnotherElement = (
   <a href="https://google.com" target='_blank'>Visit Google</a>
)


const anotherUser = "reaction"

const reactElement = React.createElement(
   'a',
   {href: 'https://google.com', target:'_blank'},
   'Click to visit google',
   anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).
render (
  //  <MyApp />
  //  <App />
    reactElement
)
