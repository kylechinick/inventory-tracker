import React from 'react';
import Inventory from './Inventory';
import PropTypes from 'prop-types';

function InventoryList(props) {
  return (
    <React.Fragment>
      {props.inventoryList.map(inventory => (
        <Inventory
          whenInventoryClicked={props.onInventorySelection}
          names={inventory.names}
          location={inventory.location}
          issue={inventory.issue}
          quantity={inventory.quantity}
          id={inventory.id}
          key={inventory.id}
        />
      ))}
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array,
  onInventorySelection: PropTypes.func
};

export default InventoryList;
