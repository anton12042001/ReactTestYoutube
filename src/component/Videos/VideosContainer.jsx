import React, {useEffect, useState} from 'react';
import SearchInput from "../Search/SearchInput/SearchInput";
import {useDispatch, useSelector} from "react-redux";
import Videos from "./Videos";
import cl from './Videos.module.css'
import {utilsVideosRequest} from "../utils/utilsVideosRequest/utilsVideosRequest";
import {setCurrentRequest} from "../../reduxToolkit/slices/videosSlice";
import {saveRequestAPI} from "../API/saveRequestAPI";
import Loader from "../UI/Loader/Loader";
import EditAddRequestPopap from "../EditAddRequest/EditAddRequestPopap/EditAddRequestPopap";


const VideosContainer = () => {
    const {videos, currentRequest} = useSelector(state => state.videos)
    const {id} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [showButtonFavorite, setShowButtonFavorite] = useState(true)
    const [loadSaveRequest, setLoadSaveRequest] = useState(false)
    const [modal, setModal] = useState(false)
    const [inputValue, setInputValue] = useState('')


    useEffect(() => {
        setInputValue(currentRequest)
    }, [currentRequest])



    const saveRequest = (request, sliderValue, sorting) => {
        saveRequestAPI(dispatch, id, request, sliderValue, setModal, sorting)
            .then(() => {
                setLoadSaveRequest(true)
            })
    }

    const youtubeTerm = async (termFromSearchBar) => {
        await utilsVideosRequest(termFromSearchBar, dispatch, videos)
        dispatch(setCurrentRequest(termFromSearchBar))

    }


    if (videos.length === 0) {
        return <Loader/>
    }


    return (
        <div className={cl.videosContainer}>
            <SearchInput
                setModal={setModal}
                showButtonFavorite={showButtonFavorite}
                saveRequest={saveRequest}
                youtubeTerm={youtubeTerm}
                setInputValue={setInputValue}/>

            {modal &&
                <EditAddRequestPopap setModal={setModal} showButtonFavorite={showButtonFavorite} inputValue={inputValue}
                                     saveRequest={saveRequest}/>}
            {loadSaveRequest && <div>Запрос успешно сохранен</div>}

            <div className={cl.videosArray}>
                {videos.map(i =>
                    <Videos titleVideo={i.snippet.title} thumbnails={i.snippet.thumbnails.medium.url}
                            channgelTitle={i.snippet.channelTitle} key={i.id.videoId}/>
                )}
            </div>
        </div>
    );
};

export default VideosContainer;