import React from 'react';
import './Products.css'
import {useQuery} from 'react-query';
import { Link, Route, Router } from 'react-router-dom';

function Products() {

        const {data, isLoading, error } = useQuery('prods', () =>
          fetch('http://127.0.0.1:5173/api/collections/products/records').then(res =>
            res.json()
          )
        )
      
        if (isLoading) return 
        <div>'Loading...'</div>
      
        if (error) return 
        <div>'An error has occurred: ' + error.message</div>
        console.log(data,"Aakash");
        

    return (
<>
    <div className="wrapper">
        <div className="header">Products Lists</div>
    </div>
    <div className="wrapper">
        <div className="cards_wrap" id="cont">
        {data.items.map((pro)=>{
                    return (
            <div className="card_item">
                <div className="card_inner">
                    <img src={`http://127.0.0.1:5173/api/files/${pro.collectionId}/${pro.id}/${pro.image}`}/>
                    <div className="role_name">
                        <h3>{pro.name}</h3>
                    </div>
                    <div className="real_name">
                        <h4>$ :{pro.price}</h4>
                    </div>
                    <div className="film">
                            <p>{pro.description}</p>
                    </div>
                    <button><Link to={`/ViewMore/test?id=${pro.id}`} >View More</Link></button><br/>
                    <button><Link to={`/Update/test?id=${pro.id}`} >Update</Link></button><br/>
                    <button><Link to={`/Delete/test?id=${pro.id}`} >Delete</Link></button>
                    
                </div>
                                
            </div>
               ) })}
                   
  
        </div>
    </div>
</>
    )

}

export default Products;