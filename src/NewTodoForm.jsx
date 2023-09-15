import {useState} from 'react';

export default function NewTodoForm({ onSubmit }){
    const [NewItem, setNewItem] = useState('');

    function handleSubmit(e){
        e.preventDefault(); 
        if(NewItem === '') return
        onSubmit(NewItem);
        setNewItem('');
      }
    return(
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className="form-row">
        <label htmlFor='item'>New Item</label>
        <input id='item' type='text' value={NewItem} onChange={e => setNewItem(e.target.value)}/>
      </div>
      <button className='btn'>Add</button>
    </form>)
}