import React from 'react'
import './ViewMore.css'
import { useQuery } from 'react-query'

function ViewMore() {
    let url = document.location.search;
    console.log(url);
    let query = new URLSearchParams(url);
    let id = query.get("id");
    console.log(id,"ID");
        const {data, isLoading, error} = useQuery('prods', () =>
          fetch(`http://127.0.0.1:8090/api/collections/products/records/${id}`).then(res =>
            res.json()
          )
        )
      
        if (isLoading) return 
        <div>'Loading...'</div>
      
        if (error) return 
        <div>'An error has occurred: ' + error.message</div>
        console.log(data,"Aakash");
        console.log(data.name);

  return (
    <>
     <div className = "product-content">
     <img id="image" className='imgs' src={`http://127.0.0.1:8090/api/files/${data.collectionId}/${data.id}/${data.image}`}/>
        <h2 className = "product-title" id="name">{data.name}</h2>
        <a href = "#" className = "product-link">Visit the Nearest Store</a>
        <div className = "product-rating">
          <i className = "fas fa-star"></i>
          <i className = "fas fa-star"></i>
          <i className = "fas fa-star"></i>
          <i className = "fas fa-star"></i>
          <span>4.7(21)</span>
        </div>
        <div className = "product-price">
          <p>$</p>
          <p id="price">{data.price}</p>
        </div>

        <div className = "product-detail">
          <h2>about this item: </h2>
          <p id="description">{data.description}</p>
        </div>

        <div className = "purchase-info">
          <input type = "number" min = "0" value = "1"/>
          <button type = "button" className = "btn">
            Add to Cart <i className = "fas fa-shopping-cart"></i>
          </button>
          <button type = "button" className = "btn">Compare</button>
        </div>

        <div className = "social-links">
          <p>Share At: </p>
          <a href = "#">
            <i className = "fab fa-facebook-f"></i>
          </a>
          <a href = "#">
            <i className = "fab fa-twitter"></i>
          </a>
          <a href = "#">
            <i className = "fab fa-instagram"></i>
          </a>
          <a href = "#">
            <i className = "fab fa-whatsapp"></i>
          </a>
          <a href = "#">
            <i className = "fab fa-pinterest"></i>
          </a>
         </div>
    </div>

  </>
  )}



export default ViewMore;