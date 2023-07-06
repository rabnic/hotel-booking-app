import { collection, addDoc, updateDoc, deleteDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const addNewRoom = async (room) => {
    try {
        const docRef = await addDoc(collection(db, "rooms"), room);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export const getAllRooms = async () => {
    const querySnapshot = await getDocs(collection(db, "rooms"));
    // getDocs(collection(db, "rooms"))
    // .then((snapshot) => {
    //     console.log();
    // })
    // .catch()
//     // console.log(querySnapshot,'Inside testGetDocs');
//     const rooms = []
//     querySnapshot.forEach((doc) => {
//         // rooms.push(doc.data())
//         console.log(doc);
//     });
//     // return rooms;
return querySnapshot;
}

