import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';

import { useState } from 'react';
import Search from './Search';

const initialState = [
  {
    id: 1,
    checked: true,
    item: 'Item 1',
  },
  {
    id: 2,
    checked: false,
    item: 'Item 2',
  },
  {
    id: 3,
    checked: false,
    item: 'Item 3',
  },
];

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppinglist'))
  );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };

    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    //console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    //console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="Grocery List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
