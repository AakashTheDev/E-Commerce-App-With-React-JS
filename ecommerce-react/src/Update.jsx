import React from 'react'
import './ContactUs.css'

function Update() {
  const submitHandler = ((e)=>{
    let url = document.location.search;
    console.log(url);
    let query = new URLSearchParams(url);
    let id = query.get("id");
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const image = e.target.image.files[0];
let bodyContent = new FormData();
bodyContent.append("name", name);
bodyContent.append("price", price);
bodyContent.append("description", description);
bodyContent.append("image", image);
try {
  fetch(`http://127.0.0.1:8090/api/collections/products/records/${id}`, {
    method: "PATCH",

    body: bodyContent
  })
    .then((response) => {
	if(response.status == 200){
		alert("Success")
	}
	else{
		alert("Error")
	}})

    //.then((json) => console.log(json));
} catch (err) {
  console.log("Something Went Wrong");
}
})
  return (
    <center>
      <form className="container" id="form"  onSubmit={submitHandler}  >
      <h2>Update a Product</h2>
      <label >Enter the Product Name:</label><br/>
      <input type="text" id="name" name='name' required placeholder="Enter the Product Name:"/><br/>
      <label >Enter the Product Price:</label><br/>
      <input type="text" id="price" name='price' required placeholder="Enter the Product Price:"/><br/>
      <label >Enter Your Description:</label><br/>
      <textarea id="description" name='description'></textarea><br/>
      <label >Upload the Image:</label><br/>
      <input type="file" id="image" name='image' required placeholder="Upload the Image"/><br/>
      <input type="submit" value="Submit" />
      </form>
    </center>
  )
}


export default Update;