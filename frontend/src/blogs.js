import db from "./firebase.js"

import { collection, getDocs } from "firebase/firestore";

/*async function fetchData() {
  try {
    const response = await fetch("https://32d5uh-8080.csb.app/api");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}*/

async function fetchData() {
  try {
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    const dataList = querySnapshot.docs.map((doc) => doc.data());
    console.log(dataList);
    return dataList;
  } catch (error) {
    console.log(error);
  }
}



export default fetchData;
