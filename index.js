const movieContainr = document.querySelector('.movies')
const searchContainr = document.querySelector('.search-movie')
const form = document.querySelector('.search')
const reg = document.querySelector('.get-started')
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}
reg.addEventListener('click',(e)=>{
    e.preventDefault();
}
)
function Registered(){
    document.querySelector('.reg').innerHTML = 'You are registered !';
}
/*
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let query = form.querySelector('.search-input').value;
fetch( `https://imdb146.p.rapidapi.com/v1/find/?query=${query}`,{

	"method": 'GET',
	"headers": {
		'X-RapidAPI-Key': 'd55b5364b0mshbd352da800f55f7p104e9fjsn3e47c6ebed8f',
		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
	}
}
)
.then(response=>response.json())
.then(data => {
    console.log(data)

    const list = data.titleResults.results;
    
    
    list.map((item)=>{
        console.log(item)
        const name = item.titleNameText;
        const poster = item.titlePosterImageModel.url;
        const star = "⭐⭐⭐⭐";
        const movie = `<li><img src ="${poster}"><h2> ${name} </h2><h5><div> ${star}</div> </h5></li>`
        
        document.querySelector('.search-movie').innerHTML += movie;
    })
})    
.catch(err=>{
    console.log(err);
})
})
fetch( `https://imdb146.p.rapidapi.com/v1/find/?query=Avengers`,{

	"method": 'GET',
	"headers": {
        'X-RapidAPI-Key': 'd55b5364b0mshbd352da800f55f7p104e9fjsn3e47c6ebed8f',
		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
	}
}
)
.then(response=>response.json())
.then(data => {
    console.log(data)

    const list = data.titleResults.results;
    
    
    list.map((item)=>{
        console.log(item)
        const name = item.titleNameText;
        const poster = item.titlePosterImageModel.url;
        const star = "⭐⭐⭐⭐";
        const movie = `<li><img src ="${poster}"><h2> ${name} </h2><h5><div> ${star}</div> </li>`
        document.querySelector('.movies').innerHTML += movie;
    })
})    
.catch(err=>{
    console.log(err);
})
*/