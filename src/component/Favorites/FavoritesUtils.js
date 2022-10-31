import {removeFavoriteQueries, setFavoriteQueries} from "../../reduxToolkit/slices/favoriteQueriesSlices";

export const favirutesUtuls = ({dispatch,id,favoriteQueries}) => {
    dispatch(removeFavoriteQueries())
    favoriteQueries.map(i => {
        const middleElement = {
            id: i.id,
            numberRequest: i.numberRequest,
            saveRequest: i.saveRequest
        }
        if (i.id === id) {
            dispatch(setFavoriteQueries(middleElement))
        } else {
            dispatch(setFavoriteQueries(middleElement))
        }
    })
}