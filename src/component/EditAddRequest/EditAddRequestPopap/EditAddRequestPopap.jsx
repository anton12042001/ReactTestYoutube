import React from 'react';
import cl from './EditAddRequestPopap.module.css'
import EditAddRequestInput from "../EditAddRequestInput/EditAddRequestInput";

const EditAddRequestPopap = ({editRequestId,setShowPopapChange,showPopapChange,idItems,nameRequest,
                                 showButtonFavorite,setModal,inputValue,saveRequest,sortingValue}) => {


    return (
        <div onClick={(e) => e.stopPropagation()} className={cl.popapItem} >

                <EditAddRequestInput
                    idItems={idItems}
                    editRequestId={editRequestId}
                    setShowPopapChange={setShowPopapChange}
                    showPopapChange={showPopapChange}
                    nameRequest={nameRequest}
                    showButtonFavorite={showButtonFavorite}
                    setModal={setModal}
                    inputValue={inputValue}
                    saveRequest={saveRequest}
                    sortingValue={sortingValue}
                    />

        </div>
    );
};

export default EditAddRequestPopap;