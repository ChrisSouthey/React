import { useState } from "react";
import { Modal } from './modal';


const ToDo = () => {
    const [showModal, setShowModal] = useState(false);

    const onDismissModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <div class="card-content">
                <h2>Learn React</h2>
                <button onClick={() => { setShowModal(true) }} className="btn">Done</button>
            </div>
            {showModal && <Modal dismissModal={onDismissModal}></Modal>

            }
        </>

    );
}

export default ToDo;