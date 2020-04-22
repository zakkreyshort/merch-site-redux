import React from 'react';
import NewItemForm from './NewItemForm.js';
import ItemList from './ItemList.js';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm />
    } else {
      currentlyVisibleState = <ItemList />
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
  
}


export default ItemControl;