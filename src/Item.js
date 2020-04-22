import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>Quantity: {props.quantity}</p>
      <button type="submit">Buy</button>
      <button type="submit">Restock</button>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Item;