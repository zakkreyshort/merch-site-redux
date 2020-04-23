import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item } = prop;

  retun (
    <React.Fragment>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.quantity}</p>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;