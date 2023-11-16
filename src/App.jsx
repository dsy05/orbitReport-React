import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from "react";
import satData from "./components/satData";


function App() {
  //array holds two vaiables, sat-compare chnages in state, setSat-function used to update state
  const [sat, setSat] = useState(satData);
  //displaySats uses Set method to creat new array-holds unique elements
  //function used to creat buttons, pullout orbitType values of each orbit inside satData
  //Set method prevnets duplicate elements-using b/c only three types of orbitTypes:low medium high
  //will eventually create 3 buttons, if used map end up with 10 many would be duplicate
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  //filterbytype arrow function take paramater called currenttype
  const filterByType = (currentType) => {
    //inside the function update the displaySats vriable uisng filter method
    //filter method simmilar to map-iterate through collection until finds desired element
    //filter callback is newSatDisplay
    const displaySats = satData.filter((newSatDisplay) => {
      //filter returns newSatDisplay.orbitType which is equal to currentType
       return newSatDisplay.orbitType === currentType;
    });
    //update setSat by passing newly updated displaySats
    setSat(displaySats);
  };
  return (
    <div>
      <Banner />
      {/* providing props for the button and table components */}
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;