import React from 'react';
import PropTypes from 'prop-types';

function InventoryDetail(props) {
  const { inventory, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>
        {inventory.location} - {inventory.names}
      </h3>
      <p>
        <em>{inventory.issue}</em>
      </p>
      <p>
        Quantity:
        <em>{inventory.quantity}</em>
      </p>
      <button onClick={props.onClickingSell}>
        Sell
      </button>
      <button onClick={props.onClickingEdit}>
        Update Inventory
      </button>
      <button onClick={() => props.onClickingDelete(inventory.id)}>
        Close Inventory
      </button>

      <hr />
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default InventoryDetail;
