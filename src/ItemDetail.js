import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      {/* <div style={itemDetailStyles}> */}
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>{item.quantity}</p>
        <button onClick={()=> onClickingDelete(item.id)}>Remove Item</button>
      {/* </div> */}
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default ItemDetail;