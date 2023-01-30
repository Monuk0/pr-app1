import React from 'react'


const Info=({name,age})=>{return <>{name} {age}</>}

function formateName(user){
  return <>{user.name+" "+user.age}</>
}

const App = () => {
const user = {
  name : "rahul",
  age : 25,
}

const element1 = (
  <h5 className="greeting">
    Hello, world!
  </h5>
);

const element = React.createElement('h6',
{className : 'greeting'},
"how are you")
  return (
    <div><Info name='monu' age={5}/> <br></br>
    <>hello,{formateName(user)}</><br></br>
    <>{element1}</><br></br>
    <>{element}</>
    </div>
  )
}

export default App