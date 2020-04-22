import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props){
  return (
  <React.Fragment>
      {props.itemList.map((element, index) => 
        <Item name={element.name}
          description={element.description}
          quantity={element.quantity}
          key={index}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
}

export default ItemList;