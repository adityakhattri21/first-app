import {useState} from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';


function Todo(props){
    const [modalOpen , SetModalOpen] = useState(false);


    function deleteHandler(){
        SetModalOpen(true);
    };

    function closeHandler(){
        SetModalOpen(false);
    }

    return (
        <div className='card'>
        <h2>{props.text}</h2>
        <div className =' actions'>
          <button  className = 'btn' onClick ={deleteHandler} >Delete</button>
          {modalOpen ? <Modal onConfirm = {closeHandler} onCancel={closeHandler}/>:null}
          {modalOpen && <Backdrop  onCancel={closeHandler} />}
        </div>
      </div>
    );
}

export default Todo;