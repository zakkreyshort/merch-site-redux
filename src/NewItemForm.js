import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value, 
      description: event.target.description.value, 
      quantity: event.target.quantity.value,
      id: v4()
    });
  }

  const newItemFormStyles = {
    width: '40vw',
    margin: 'auto auto',
    backgroundColor: 'transparent',
    outline: 'none',
    boxShadow: 'none',
    padding: '5%',
    marginBottom: '2%'
  }

  return (
    <React.Fragment>
      <div style={newItemFormStyles}>
        <form onSubmit={handleNewItemFormSubmission}>
          <img src="https://img.icons8.com/metro/26/000000/pencil.png" />
          <input
            type='text'
            name='name'
            placeholder='item name' />
          <input
            type='text'
            name='description'
            placeholder='item description' />
          <input
            type='number'
            name='quantity'
            placeholder='initial quantity' />
          <button className="buttonStyles" type='submit'>add item</button>
        </form>
      </div>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
}

export default NewItemForm;