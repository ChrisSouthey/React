import React from 'react';
import ReactDOM from 'react-dom';

interface ConfirmModalProps {
    dismissModal: () => void;
    confirmModal: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = (props) => {
    const modalRoot = document.getElementById('root-modal')!;

    return ReactDOM.createPortal(
        <>
            <div className="modal">
                <p>Please confirm checkout...</p>
                <div className='modalBtns'>
                    <button
                        onClick={props.dismissModal}
                        className="modalBtn"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={props.confirmModal}
                        className="modalBtn"
                    >
                        Confirm
                    </button>  
                </div>
            </div>
            <div
                onClick={props.dismissModal}
                className="backdrop"
            />
        </>,
        modalRoot
    );
};
