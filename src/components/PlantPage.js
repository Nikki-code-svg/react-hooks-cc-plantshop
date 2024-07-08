import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [ plants, setPlants ] = useState([])
const [ filterPlants, setFilteredPlants ] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(response => response.json())
  .then((plant) => setPlants(plant))
}, [])


function addPlant(newPlant) {
  setPlants([...plants, newPlant])
}

const handleSearchPlants =  plants.filter((plant) => {
   return plant.name.toLowerCase().includes(filterPlants.toLowerCase())
 })

  return (
    <main>
      <NewPlantForm  addPlant={addPlant} />
      <Search filterPlants={filterPlants} setFilteredPlants={setFilteredPlants} />
      <PlantList plants={handleSearchPlants} />
    </main>
  );
}

export default PlantPage;
