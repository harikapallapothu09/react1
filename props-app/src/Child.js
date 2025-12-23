
// function Child(props){

//     const name = 'Ram';
//     const city = "Vijaywada"

//     return(

//         <>This is child component
//         <p>Name: {props.name}</p>
//         <p>City: {props.city}</p>

//         </>
//     )
// }

// export default Child;


// function Child(props){
//     const {name, state, city} = props;
//     return(
//         <> 
//         <p> Name is: <strong>{name}</strong></p>
//         <p> City is: <strong>{city}</strong></p>
//         <p> State is: <strong>{state}</strong></p>
//         </>
//     )
// }

// export default Child;

// function Child({name, state, city}){

//     returnld;


function Child({ name, age, user, hobby , jsondata , children}) {

    return (

        <>
            <u><strong>{children}</strong></u>
            <p> <strong>Name:</strong>{name}</p><br></br>
            <p> <strong>Age:</strong>{age}</p><br></br>
            <p> <strong>User info:</strong>{user.id}, {user.username}</p><br></br>
            <p> <strong>Hobbies</strong></p><br></br>
            <ul>
            {hobby.map((hobby)=>(
                <li>{hobby}</li>
            ))}

            </ul>

            <p><strong>JSON Data:</strong></p>
            <p>Status: {jsondata.status}</p>
            <p>ID: {jsondata.data.id}</p>
            <p>Title: {jsondata.data.title}</p>
            <p>Content: {jsondata.data.content}</p>

        </>
    )
}

export default Child;