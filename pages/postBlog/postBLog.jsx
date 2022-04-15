import react from "react";
import {useState} from 'react'



export default function PostBlog(){
    const [data, setData] = useState([])
    const getData = async() => {
        const response = await fetch('/api/postBog')
        const values = await response.json()
        setData(values)
    }

 

    return(
     <div className="blog" >
              <button onClick={getData}>
        carregar
      </button>
      <ul>
        {data.map(item =>(
          <li>
            {item.message}
          </li>
        ))}
      </ul>
        
        
      </div>


    )
}

