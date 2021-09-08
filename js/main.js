// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBLSn8a789nRSvFF0T1yxIPM6Ei4U9lxhw",
	authDomain: "personal-56f66.firebaseapp.com",
	projectId: "personal-56f66",
	storageBucket: "personal-56f66.appspot.com",
	messagingSenderId: "117759962206",
	appId: "1:117759962206:web:ab68824532d83dc23618cf",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const btnSubir = document.getElementById("btnSubir");
const inputFile = document.getElementById("inputFile");
const img = document.getElementById("img");

async function subir(e) {
	try {
		e.preventDefault();
		const file = inputFile.files[0];
		if (file == undefined) {
			alert("no");
			return;
		}
		const storageRef = await storage.ref(`/fotos/${file.name}`);
		const task = await storageRef.put(file);
		const urlImg = await storageRef.getDownloadURL();
		img.src = urlImg;
		alert(`Ok ${urlImg}`);
		return;
	} catch (error) {
		console.log(error);
		alert(`Error ${error.message}`);
		return;
	}
}

btnSubir.addEventListener("click", subir);
