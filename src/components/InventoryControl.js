import React from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';
import EditInventoryForm from './EditInventoryForm';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedInventory: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedInventory != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedInventory: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  };

  handleAddingNewInventoryToList = newInventory => {
    const newMainInventoryList =
      this.state.mainInventoryList.concat(newInventory);
    this.setState({
      mainInventoryList: newMainInventoryList,
      formVisibleOnPage: false
    });
  };

  handleChangingSelectedInventory = id => {
    const selectedInventory = this.state.mainInventoryList.filter(
      inventory => inventory.id === id
    )[0];
    this.setState({ selectedInventory: selectedInventory });
  };

  handleEditClick = () => {
    console.log('handleEditClick reached!');
    this.setState({ editing: true });
  };

  handleEditingInventoryInList = inventoryToEdit => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter(inventory => inventory.id !== this.state.selectedInventory.id)
      .concat(inventoryToEdit);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedInventory: null
    });
  };

  handleDeletingInventory = id => {
    const newMainInventoryList = this.state.mainInventoryList.filter(
      inventory => inventory.id !== id
    );
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedInventory: null
    });
  };

  handleSellingInventory = () => {
    const inventoryToDecrement = this.state.selectedInventory;
    if (this.state.selectedInventory.quantity !== 0) {
      const quantityToDecrement = {
        quantity: (inventoryToDecrement.quantity -= 1)
      };
      this.handleChangingSelectedInventory(quantityToDecrement.id);
    } else {
      this.handleChangingSelectedInventory(this.state.selectedInventory.id);
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditInventoryForm
          inventory={this.state.selectedInventory}
          onEditInventory={this.handleEditingInventoryInList}
        />
      );
      buttonText = 'Return to Inventory List';
    } else if (this.state.selectedInventory != null) {
      currentlyVisibleState = (
        <InventoryDetail
          inventory={this.state.selectedInventory}
          onClickingDelete={this.handleDeletingInventory}
          onClickingEdit={this.handleEditClick}
          onClickingSell={this.handleSellingInventory}
        />
      );
      buttonText = 'Return to Inventory List';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewInventoryForm
          onNewInventoryCreation={this.handleAddingNewInventoryToList}
        />
      );
      buttonText = 'Return to Inventory List';
    } else {
      currentlyVisibleState = (
        <InventoryList
          inventoryList={this.state.mainInventoryList}
          onInventorySelection={this.handleChangingSelectedInventory}
        />
      );
      buttonText = 'Add Inventory';
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default InventoryControl;
