import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData(){
  const [post , setpost] = useState({})
  const [id, setid] = useState ([])
  const [url, seturl] = useState ([])
  const [idfrombutton, setIdFromButton] = useState ([])
  const [urlfrombutton, seturlFromButton] = useState ([])
  const handleClick = () => {
    setIdFromButton(id)
    seturlFromButton(url)
  }

  useEffect (() => {
    axios.put(`https://app.appointo.me/scripttag/shopify_endpoint`, {
      shopify_domain: url,
      endpoint: id
  })
    .then(res =>{
      setpost(res.data)
    }
      )
  }, [idfrombutton, urlfrombutton]
  )
  return(
    <div className="App">
      <form>
      <div className="input-group">
          <label htmlFor="id">Endpoint</label>
          <input type="text" value={id} onChange={e => setid(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="url">Shop URL</label>
          <input type="text" value={url} onChange={e => seturl(e.target.value)} />
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
