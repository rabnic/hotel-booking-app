import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
};

export const deleteRoom = async (roomId) => {
  return await deleteDoc(doc(db, "rooms", roomId));
};

export const uploadRoomImages = async (roomNumber, images) => {
  const storage = getStorage();
  const imagesUrls = [];

  // Upload 1 image at a time
  for (let [index, image] of images.entries()) {
    const imageRef = ref(storage, `/rooms/room${roomNumber}/${index}`);
    await uploadBytes(imageRef, image)
      .then((snapshot) => {
        // console.log(image.name, "upload success");
        getDownloadURL(snapshot.ref).then((url) => {
          //   console.log(url);
          imagesUrls.push(url);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return imagesUrls;
};
// uploadString(storageRef, uri, "data_url").then((snapshot) => {
//   getDownloadURL(snapshot.ref).then(async (url) => {
//     // Url
//   });
// });
