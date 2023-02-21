function Modal (props) {

    function confirm(){
        props.onConfirm();
    };




 return (
    <div className='modal'>
        <p>Are You Sure?</p>
        <button className ='btn btn--alt' onClick={props.onCancel} >Cancel</button>
        <button className ='btn' onClick={confirm}>Confirm</button>
    </div>
 );
}

export default Modal;