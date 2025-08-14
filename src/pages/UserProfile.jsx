import { useParams, useOutletContext } from "react-router-dom"

function UserProfile() {
  const params = useParams();
  const users = useOutletContext();

  const newUser = users.find(user => user.id === params.id);

  return(  
      <article>
        { newUser.name ? <h1>{newUser.name}</h1> : <h1>Loading...</h1> }
      </article>
  )
}

export default UserProfile