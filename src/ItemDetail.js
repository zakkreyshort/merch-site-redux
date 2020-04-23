import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item } = props;

  return (
    <React.Fragment>
      {/* <div style={itemDetailStyles}> */}
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>{item.quantity}</p>
      {/* </div> */}
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;