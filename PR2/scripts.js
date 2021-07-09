const API_url = "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";

const fetch = document.getElementById("fetch");
const image = document.querySelector("img");
const judulTrack = document.getElementById("judul");
const penyanyiTrack = document.getElementById("penyanyi");
const albumTrack = document.getElementById("album");



function functionSubmit() {
		alert("Happy Listening on the Yoga Music Playlist");
}


fetch.addEventListener("click", () => {
  fetch(API_url)
   	.then((res) => res.json())
   	.then((data) => {
     console.log(data);
     const { name, album, artists } = data;
      image.src = album.images[1].url;
     judulTrack.innerText = name;
     penyanyiTrack .innerText = artists.map((artist) => `${artist.name} `);
     albumTrack .innerText = album.name;
     
   	})
   	.catch((error) => alert(error));
});