import { collection, addDoc, updateDoc, deleteDoc, getDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import {getStorage, ref, uploadBytes} from 'firebase/storage';

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
return querySnapshot;
}

export const deleteRoom = async (roomId) => {
    return await deleteDoc(doc(db, "rooms", roomId));
}

export const uploadRoomImages = async (roomNumber, images) => {

    const storage = getStorage();
    // const imagesUrls = []
    
    // Upload 1 image at a time
    for(let image of images){
        const imageRef = ref(storage, `roomsImages/room${roomNumber}`);
        console.log('line 31');
       await uploadBytes(imageRef,image).then(snapshot => {
            console.log(image.name, 'upload success');
            console.log(snapshot);
            // imagesUrls.push()
        }).catch(err => {
            console.log(err.message);
        })
    };

}


// // Create a root reference
// const storage = getStorage();

// // Create a reference to 'mountains.jpg'
// const mountainsRef = ref(storage, 'mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name;           // true
// mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 

// ///////////////////////////////////////////////////

// const storage = getStorage();
// const storageRef = ref(storage, 'some-child');

// // 'file' comes from the Blob or File API
// uploadBytes(storageRef, file).then((snapshot) => {
//   console.log('Uploaded a blob or file!');
// });