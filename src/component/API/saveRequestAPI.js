import {doc, getFirestore, updateDoc, getDoc,collection,addDoc} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../firebase";
import {setFavoriteQueriesID} from "../../reduxToolkit/slices/favoriteQueriesIDSlices";

export const saveRequestAPI = async (dispatch, id,request,setModal) => {
    debugger

   const saveRequestUser = []
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, "users", `${id}`);
    const docSnap = await getDoc(docRef);


    const userRequestRef = await addDoc(collection(db, "request"), {  //Создание коллекции сохраненных запросов
        saveRequest: request,                                                   //для определенного пользователя
        numberRequest: 12
    })
    if (docSnap.exists()) {                                                     //Получение id сохраненных запросов пользователя с сервера
        docSnap.data().saveRequest.map(r => {                                   // и сохранение в массив
            saveRequestUser.push(r)
        })
    }
    saveRequestUser.push(userRequestRef.id)                                     //Добавление в массив нового запроса для сохранения
    await updateDoc(docRef, {                                              //Загрузка на сервер сохраненных запросов
        saveRequest:saveRequestUser
    });
    dispatch(setFavoriteQueriesID(saveRequestUser))
    setModal(false)                                                             //Закрытие модального окна
}