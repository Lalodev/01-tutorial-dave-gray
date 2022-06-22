import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
  //console.log(item.id); //npm i react-icons --save-prod
  return (
    <li className="item">
      <input
        onChange={() => handleCheck(item.id)}
        type="checkbox"
        defaultChecked={item.checked}
      />
      <label
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: 'line-through' } : null}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
