import {
  collection,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const addNewRoom = async (room) => {
  try {
    const docRef = await addDoc(collection(db, "rooms"), room);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding room document: ", e);
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

export const registerNewGuest = async (guest) => {
  try {
    // Add a new document in collection "cities"
    const docRef = await setDoc(doc(db, "guests", guest.email), guest);
    console.log("Guest registered", docRef)
  } catch (e) {
    console.error("Error adding guest document: ", e);
  }
}

export const createGuestAuth = async (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      /*
      user.updateProfile({
        displayName: username
    }).then(function() {
        // Update successful.
    }, function(error) {
        // An error happened.
    });
      */
      // Signed in 
      console.log('Signed in');
      console.log(userCredential.user);
      console.log(auth);
    })
    .catch((error) => {
      console.log('Error Code=', error.code, ' ---- Error Message=', error.message);
    });
}

// export const login
