import {
  collection,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const auth = getAuth();
const USERS = "users";
const ROOMS = "rooms";

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

// export const getRoom = async (roomId) => {
//   const docRef = await getDoc(collection(db, "rooms", roomId));
// }

export const addBooking = async (roomId, bookingObject) => {
  const docRef =  doc(db, "rooms", roomId);
  const collectionRef = collection(docRef, "theBookings");
  await addDoc(collectionRef, bookingObject);
}

export const getRoomsByType = async (roomType) => {
  const roomsRef = collection(db, ROOMS);
  const byTypeQuery = query(roomsRef, where("type", "==", roomType));
  const querySnapshot = await getDocs(byTypeQuery);
  return querySnapshot;
};

export const getRoomsByPriceRange = async (priceStart, priceEnd) => {
  const roomsRef = collection(db, ROOMS);
  const byPriceQuery = query(
    roomsRef,
    where("price", ">=", priceStart),
    where("price", "<=", priceEnd)
  );
  const querySnapshot = await getDocs(byPriceQuery);
  return querySnapshot;
};

export const getRoomsByTypeAndPriceRange = async (
  roomType,
  priceStart,
  priceEnd
) => {
  const roomsRef = collection(db, ROOMS);
  const byTypeAndPriceQuery = query(
    roomsRef,
    where("type", "==", roomType),
    where("price", ">=", priceStart),
    where("price", "<=", priceEnd)
  );
  const querySnapshot = await getDocs(byTypeAndPriceQuery);
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
    const docRef = await setDoc(doc(db, USERS, guest.email), guest);
    console.log("Guest registered", docRef);
  } catch (e) {
    console.error("Error adding guest document: ", e);
  }
};

export const createGuestAuth = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      // Signed in
      console.log("Signed in");
      console.log(user);
      console.log(auth);
    })
    .catch((error) => {
      console.log(
        "Error Code=",
        error.code,
        " ---- Error Message=",
        error.message
      );
    });
};

export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   console.log(user);
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(errorCode, errorMessage);
  // });
};

export const getUser = async (email) => {
  const userDocRef = doc(db, USERS, email);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};

