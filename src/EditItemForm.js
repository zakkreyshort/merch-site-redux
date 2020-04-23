import React from 'react';
import ReusableForm from './ReusableForm';

function EditItemForm(props){
  return( 
    <React.Fragment>
      <ReusableForm
        buttonText="Update Item Details" />
    </React.Fragment>
  );
}

export default EditItemForm;