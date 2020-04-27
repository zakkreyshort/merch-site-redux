import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

    let action;
    const itemData = {
        name: "Umbrella",
        description: "Keeps you dry",
        quantity: 1,
        id: "1"
    };

test('Should return default state if no action is passed to reducer', () => {
  expect(itemListReducer({}, {type: null})).toEqual({});
});

test('Should successfully add new item to masterItemList', () => {
  const { name, description, quantity, id } = itemData;
  action = {
    type: 'ADD_ITEM',
    name: name,
    description: description, 
    quantity: quantity,
    id: id
  };

  expect(itemListReducer({}, action)).toEqual({
    [id] : {
      name: name,
      description: description,
      quantity: quantity,
      id: id
    }
  });
});

});