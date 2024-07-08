import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [plantData, setPlantData] = useState({
        name: "",
        image: "",
        price: 0,

  })


 function handleChange(event) {
    setPlantData({
      ...plantData,
      [event.target.name]: event.target.value})
  }

function handleSubmit(event) {
  event.preventDefault();
  console.log(plantData)

fetch("http://localhost:6001/plants" , {
     method:"POST",
     headers: {
       "Content-Type": "application/JSON",
     },
     body: JSON.stringify(plantData),
})
    .then(response => response.json())
    .then(newPlant => {
       addPlant(newPlant);
       setPlantData({ name: "", image: "", price: 0});
    })
    .catch(error => {
      console.error("Error adding plant:", error);
    });

}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        name="name" 
        placeholder="Plant name" 
        value={plantData.name} 
        onChange={handleChange}
        required
        />
        <input type="text" 
        name="image" 
        value={plantData.image}
        placeholder="Image URL" 
        onChange={handleChange} 
        required
        />
        <input type="number" 
        name="price" 
        value={plantData.price}
        step="0.01" 
        placeholder="Price" 
        onChange={handleChange}
        required
        />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
