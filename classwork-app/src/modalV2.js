import ReactDOM from 'react-dom'

export const ModalV2 = (props) => {
    const rootModalElement = document.getElementById('root-modal');
    return ReactDOM.createPortal(
        <>
        <div className="modal">
            <p>Did you complete the task?</p>
            <button onClick={() => props.dismissModal()} class="btn btn=highlight">Cancel</button>
            <button onClick={() => props.dismissModal()} class="btn">Confirm</button>
            
        </div>
        <div onClick={() => props.dismissModal()} class="backdrop"></div>
        </>,
        rootModalElement
    );
}
