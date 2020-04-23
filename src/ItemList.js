import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props){
  return (
  <React.Fragment>
      {props.itemList.map((item) => 
        <Item 
          whenItemClicked = {props.onItemSelection}
          whenBuyClicked = {props.onClickingBuy}
          whenRestockClicked={props.onClickingRestock}
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          id={item.id}
          key={item.id}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default ItemList;