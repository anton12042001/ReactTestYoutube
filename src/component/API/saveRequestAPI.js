import {doc, getFirestore, updateDoc, getDoc,collection,addDoc} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";
import {setFavoriteQueriesID} from "../../reduxToolkit/slices/favoriteQueriesIDSlices";
import {setFavoriteQueries} from "../../reduxToolkit/slices/favoriteQueriesSlices";
import {setCurrentRequest} from "../../reduxToolkit/slices/videosSlice";

export const saveRequestAPI = async (dispatch, id,request,sliderValue,setModal,sorting,nameRequest) => {

   const saveRequestUser = []
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, "users", `${id}`);
    const docSnap = await getDoc(docRef);


    const userRequestRef = await addDoc(collection(db, "request"), {  //Создание коллекции сохраненных запросов
        saveRequest: request,                                                   //для определенного пользователя
        numberRequest: sliderValue,
        sorting:sorting,
        nameRequest:nameRequest,
    })
    if (docSnap.exists()) {                                                     //Получение id сохраненных запросов пользователя с сервера
        docSnap.data().saveRequest.map(r => {                                   // и сохранение в массив
            saveRequestUser.push(r)
        })
    }
    saveRequestUser.push(userRequestRef.id)                                     //Добавление в массив нового запроса для сохранения
    await updateDoc(docRef, {                                              //Загрузка на сервер сохраненных запросов
        saveRequest:saveRequestUser,
        nameRequest:nameRequest
    });
    const middleElement = {
        saveRequest: request,                                                   //для определенного пользователя
        numberRequest: sliderValue,
        sorting:sorting,
        nameRequest:nameRequest,
        id:docSnap.data().id,
    }
    dispatch(setFavoriteQueriesID(saveRequestUser))
    dispatch(setCurrentRequest(request))
    dispatch(setFavoriteQueries(middleElement))
    setModal(false)                                                             //Закрытие модального окна
}