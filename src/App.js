import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData(){
  const [post , setpost] = useState({})
  const [id, setid] = useState ([])
  const [idfrombutton, setIdFromButton] = useState ([])
  const handleClick = () => {
    setIdFromButton(id)
  }

  useEffect (() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
    .then(res =>{
      setpost(res.data)
    }
      )
  }, [idfrombutton]
  )
  return(
    <div className="App">
      <form>
      <div className="input-group">
          <label htmlFor="id">Order Id</label>
          <input type="text" value={id} onChange={e => setid(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="url">Shop URL</label>
          <input type="text" id="uid" />
        </div>
        <button type="button" onClick={handleClick}>Fetch Order Detail</button>
      </form>
      {idfrombutton.length > 0 && (
            <pre>{JSON.stringify(post, null, 2)}</pre>
      )
      
}
      
    </div>
  )




}

export default FetchData;
