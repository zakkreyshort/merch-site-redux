import React from 'react';
import PropTypes from 'prop-types';

function Item(props){

  const itemStyles = {
    height: '200px',
    width: '200px',
    border: '1px solid #f5f5f5',
    borderRadius: '5px',
    padding: '5%',
  }

  return (
    <React.Fragment>
      <div style={itemStyles}>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>Quantity: {props.quantity}</p>
        <div className="buttons">
          <button type="submit">Buy</button>
          <button type="submit">Restock</button>
        </div>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Item;