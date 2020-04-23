import React from 'react';
import NewItemForm from './NewItemForm.js';
import ItemList from './ItemList.js';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedItem !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMasterItemList = this.state.masterItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      masterItemList: editedMasterItemList,
      editing: false,
      selectedItem: null
    });
  }

  handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item => item.id !== id);
    this.setState({
      masterItemList: newMasterItemList,
      selectedItem: null
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem}); 
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    });
  }

  render(){

    const itemControlStyles = {
      position: 'relative',
      top: '30vh',
      margin: '2%',
      overflowY: 'auto'
    }

    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm 
        item = {this.state.selectedItem}
        onEditItem = {this.handleEditingItemInList} />
      buttonText = "return to items";
    } else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail 
        item = {this.state.selectedItem} 
        onClickingDelete = {this.handleDeletingItem}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "return to items";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm 
        onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "return to items";
    } else {
      currentlyVisibleState = <ItemList 
        itemList={this.state.masterItemList} 
        onItemSelection={this.handleChangingSelectedItem} />
      buttonText = "+";
    }

    return (
      <React.Fragment>
        <div style={itemControlStyles}>
          <div className="adjustableButton">
            <button onClick={this.handleClick}>{buttonText}</button>
          </div>
          <div className="storeFront">
            {currentlyVisibleState}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemControl;