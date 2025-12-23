
import Child from "./Child"

function App(){


  // return (
  //   <>
  //   <h1> This is app component</h1>

  //   <Child name="honey" city = "Hyderabad" state = "TG"/>
  //   <Child name = 'Harika' city = "Pune" state = "MH"/>
  //   <Child name = 'Takshvi' city = "Banglore" state = "KA"/>
 


  //   </>
  // )
  const name = 'harika';
  const age = 29;
  const user = {
    id: 1,
    username : "harika3412@gmai.com"
  }
  const hobby = ['reading','writing']

  const jsondata = {
    status: 'success',
    data:{
      id: 101,
      title : 'Post Title',
      content: 'post-content'
    }
  }


  return(
    <>
    <Child name= {name} age = {age} user = {user} hobby = {hobby} jsondata = {jsondata} >
      USER INFORMATION
    </Child>
    </>
  )
}

export default App;
