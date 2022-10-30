import React from 'react';
import cl from './EditAddRequestPopap.module.css'
import EditAddRequestInput from "../EditAddRequestInput/EditAddRequestInput";

const EditAddRequestPopap = ({editRequestId,setShowPopapChange,showPopapChange,idItems,nameRequest,showButtonFavorite,setModal,inputValue,saveRequest}) => {


    return (
        <div onClick={(e) => e.stopPropagation()} className={cl.popapItem} >
            <div>
                <EditAddRequestInput
                    idItems={idItems}
                    editRequestId={editRequestId}
                    setShowPopapChange={setShowPopapChange}
                    showPopapChange={showPopapChange}
                    nameRequest={nameRequest}
                    showButtonFavorite={showButtonFavorite}
                    setModal={setModal}
                    inputValue={inputValue}
                    saveRequest={saveRequest}/>
            </div>
        </div>
    );
};

export default EditAddRequestPopap;