import { useState } from 'react'
import { Modal, Button } from 'antd';

function AddButton() {

    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const handleOk = () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Button style={{ backgroundColor: 'lightgreen', borderRadius: '10px', color: 'white' }} onClick={showModal}><strong>Add</strong></Button>
            <Modal title="Add/Update Todo" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >

            </Modal>
        </>
    )
}

export default AddButton
