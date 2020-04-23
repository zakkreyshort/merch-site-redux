import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditItemForm(props){
  const { item, onEditIte } = props;

  function handleEditItemFormSubmission(event){
    event.preventDefault();
    props.onEditItem({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: item.id
    });
  }
  
  return( 
    <React.Fragment>
      <ReusableForm
        formSubmissonHandler={handleEditItemFormSubmission}
        buttonText="Update Item Details" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditItem: PropTypes.func
}

export default EditItemForm;