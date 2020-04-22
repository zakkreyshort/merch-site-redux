import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

const masterItemList = [
  {
    name: "Earth day t-shirt",
    description: "100% hemp",
    quantity: 14
  },
  {
    name: "Save the planet hat",
    description: "made with recycled materials",
    quantity: 25    
  },
  {
    name: "Earth Day Water Bottle",
    description: "An earth-friendly way to stay hydrated",
    quantity: 7
  }
];

function ItemList(){
  return (
    <React.Fragment>
      <hr />
      {masterItemList.map((element, index) => 
        <Item name={element.name}
          description={element.description}
          quantity={element.quantity}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default ItemList;