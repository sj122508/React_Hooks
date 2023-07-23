import React, {useEffect, useState} from 'react';
import axios from 'axios';

function UseEffectWithAxios() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        console.log('did mount')
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then((response) => {
            console.log(response, 'Posts Response')
            setPost(response.data)
        })
        .catch((error) => {
            console.log(error, 'Posts Error')
        })
    }, [idFromButtonClick])

   const handleClick = () => {
    setIdFromButtonClick(id)
   }
    
  return (
    <div>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />   
        <button type='button' onClick={handleClick}>Fetch Post</button>  
        {/* <ul>
            {post.map((post) => 
                <li key={post.id}>{post.title}</li>
            )}
        </ul> */}

        <div>{post.title}</div>
    </div>
  )
}

export default UseEffectWithAxios