import React, { useState, useEffect } from "react";
import { AllCards, ComponentLoading } from "../../components";
import { useDispatch } from "react-redux";
import { setRecipes } from "../../features/recipe/recipeSlice";
import { useGetRecipesQuery } from "../../features/recipe/recipeApiSlice";
import useTitle from "../../hooks/useTitle";

const Recipe = () => {
  const { data, isLoading } = useGetRecipesQuery();
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState("all"); // Default filter: show all recipes
  useTitle("TasteBook - All Recipes");

  useEffect(() => {
    if (!isLoading) {
      dispatch(setRecipes(data));
      setFilteredData(data); // Initially set filteredData to all recipes
    }
  }, [isLoading, data, dispatch]);

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    // Filter recipes based on selected category
    const filteredRecipes = data.filter((recipe) => {
      if (selectedFilter === "all") {
        return true; // Show all recipes
      } else {
        return recipe.category === selectedFilter;
      }
    });
    setFilteredData(filteredRecipes);
  };

  return (
    <>
  
    

      {/* Only display recent recipes section if no filter is selected */}
      {filter === "all" && (
        <AllCards
          mainTitle={"Discover Flavorful Creations"}
          tagline={
            "Delight in a diverse collection of mouthwatering recipes, curated and shared by passionate food enthusiasts."
          }
          type={"recipe"}
          data={filteredData} // Pass filtered data to AllCards component
          filterOptions={(
            <select
              className="p-2 border rounded"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Vegan">Vegan</option>
            </select>
          )}
        />
      )}

      {/* Veg recipes section */}
      {filter === "Veg" && (
        <AllCards
          mainTitle={"Veg Recipes"}
          type={"recipe"}
          data={filteredData.filter((recipe) => recipe.category === "Veg")}
          filterOptions={(
            <select
              className="p-2 border rounded"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Vegan">Vegan</option>
            </select>
          )}
        />
      )}

      {/* Non-Veg recipes section */}
      {filter === "Non-Veg" && (
        <AllCards
          mainTitle={"Non-Veg Recipes"}
          type={"recipe"}
          data={filteredData.filter((recipe) => recipe.category === "Non-Veg")}
          filterOptions={(
            <select
              className="p-2 border rounded"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Vegan">Vegan</option>
            </select>
          )}
        />
      )}

      {/* Vegan recipes section */}
      {filter === "Vegan" && (
        <AllCards
          mainTitle={"Vegan Recipes"}
          type={"recipe"}
          data={filteredData.filter((recipe) => recipe.category === "Vegan")}
          filterOptions={(
            <select
              className="p-2 border rounded"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Vegan">Vegan</option>
            </select>
          )}
        />
      )}
    </>
  );
};

export default Recipe;
