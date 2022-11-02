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
import grid from '../../img/viewSwitcher/grid.svg'
import gridActive from '../../img/viewSwitcher/gridActive.svg'
import list from '../../img/viewSwitcher/list.svg'
import listActive from '../../img/viewSwitcher/listActive.svg'


const VideosContainer = () => {
    const {videos, currentRequest} = useSelector(state => state.videos)
    const {id} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [showButtonFavorite, setShowButtonFavorite] = useState(true)
    const [modal, setModal] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [viewSwitcherGrid, setViewSwitcherGrid] = useState(true)
    const [saveFavorite, setSaveFavorite] = useState(false)


    useEffect(() => {
        setInputValue(currentRequest)
        setSaveFavorite(false)
    }, [currentRequest])

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else if (!modal) {
            document.body.style.overflow = "scroll";
        }
    }, [modal])


    const saveRequest = (request, sliderValue, sorting, nameRequest) => {
        debugger
        saveRequestAPI(dispatch, id, request, sliderValue, setModal, sorting, nameRequest)
            .then(() => {
                setSaveFavorite(true)
            })
    }

    const youtubeTerm = async (termFromSearchBar) => {
        await utilsVideosRequest(termFromSearchBar, dispatch, videos)
        dispatch(setCurrentRequest(termFromSearchBar))
    }


    if (!videos || !currentRequest) {
        return <div className={cl.containerLoader}><Loader/></div>
    }
    if(videos.length === 0){
        return <div className={cl.plug}>По вашему запросу
            <span className={cl.plugSpan} > «{currentRequest}» </span>
            ничего не найдено. Установите количество видео для сохраненного запроса</div>
    }


    return (
        <div className={cl.videosContainer}>
            <SearchInput
                setSaveFavorite={setSaveFavorite}
                setModal={setModal}
                showButtonFavorite={showButtonFavorite}
                saveRequest={saveRequest}
                youtubeTerm={youtubeTerm}
                setInputValue={setInputValue}
                saveFavorite={saveFavorite}/>

            {modal &&
                <div className={cl.modalRequestPopap}>
                    <EditAddRequestPopap setModal={setModal} showButtonFavorite={showButtonFavorite}
                                         inputValue={inputValue}
                                         saveRequest={saveRequest}/>
                </div>}
            <div className={cl.blockInfoAndControl}>
                <div className={cl.requestVideo}>Видео по запросу «<span
                    className={cl.currentRequest}>{currentRequest}</span>»
                </div>


                <div className={cl.viewSwitcher}>
                    <button onClick={() => setViewSwitcherGrid(false)} className={cl.listSwitcher}>
                        <img src={(viewSwitcherGrid) ? list : listActive} alt=""/>
                    </button>
                    <button onClick={() => setViewSwitcherGrid(true)}>
                        <img src={(viewSwitcherGrid) ? gridActive : grid} alt=""/>
                    </button>
                </div>


            </div>
            <div className={(viewSwitcherGrid) ? cl.videosGrid : cl.videosList}>
                {videos.map(i =>
                    <Videos titleVideo={i.snippet.title} thumbnails={i.snippet.thumbnails.medium.url}
                            channelTitle={i.snippet.channelTitle} key={i.id.videoId}
                            viewSwitcherGrid={viewSwitcherGrid}/>
                )}
            </div>
        </div>
    );
};

export default VideosContainer;