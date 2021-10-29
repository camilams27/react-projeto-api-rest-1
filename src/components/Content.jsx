import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Content.css'

function Content(){

    const [imagens, setImagens] = useState([]);
    const [botao, setBotao] = useState(true);

    var valor = [];

    useEffect(()=>{
        api.get("")
        .then((response)=>setImagens(response.data.results))
        .catch((error)=>{
            console.log(error)
        })
    }, [botao])

    valor = imagens.slice(0,10);

  return (
      <div className="principalContainer">
          <div className="cabecalho">
                <h1> some people </h1>
                <button onClick={()=>botao ? setBotao(false) : setBotao(true)}> 
                    <img src="https://cdn-icons.flaticon.com/png/512/3423/premium/3423267.png?token=exp=1635536404~hmac=f723a909e9096c759553610dfa09be13" alt="" className="refresh" /> 
                </button>
            </div>  
            <div className="container">
                <div className="dados">
                    {valor.map((response)=>{
                        return <div className="card">
                                    <img src={response.picture.large} alt="" />
                                    <p>
                                    <span>name: </span>{response.name.first} {response.name.last}
                                    <br/>
                                    <span>age: </span>{response.dob.age} <br/>
                                    <span>location: </span>{response.location.state}, {response.location.country}.
                                    </p>
                                                        
                                </div>
                    })}
                </div>    
            </div>
        </div>
        
    );
    
}

export default Content;