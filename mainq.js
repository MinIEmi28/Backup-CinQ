const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20536f541emsh715df7694d087d2p12330fjsnac9b01128bf1',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};
var form = document.getElementById("sidform");
form.addEventListener("submit",function(event){
    event.preventDefault();    
    var startYear=document.getElementById('startYear').value;
    var endYear=document.getElementById('endYear').value;
    var imdbMin=document.getElementById('minrate').value;
    var imdbMax=document.getElementById('maxrate').value;
    var genre=document.getElementById('gen').value;
    var language=document.getElementById('lang').value;
    var type=document.getElementById('type').value;
    var sort=document.getElementById('sort').value;
    var url='https://ott-details.p.rapidapi.com/advancedsearch?start_year='+startYear+'&end_year='+endYear+'&min_imdb='+imdbMin+'&max_imdb='+imdbMax+'&genre='+genre+'&language='+language+'&type='+type+'&sort='+sort+'&page=1';
    
    fetch(url,options)
	    .then(response => response.json())
	    .then(data => {
            const list= data.results;
            list.map((item)=>{
                const name=item.title;
                const poster=item.imageurl;
                const genreMovie=item.genre;
                const releaseYear=item.released;
                const rating=item.imdbrating;
                const about=item.synopsis;
                const showType=item.type;
                const movie=`<li> <img src="${poster}" alt="${name}"> <br> <h2>${name}</h2>  <p>${about}</p> <br><p>${genreMovie}</p>  <div class="rate"> <div class="rating"><i class="fa-solid fa-star" style="color: #f2df07;"></i> <p>${rating}</p></div>  <div class="year"><p>${releaseYear}</p></div></div> </li>`
                document.querySelector('.movies').innerHTML += movie;
                
                
            })

        })
	    .catch(err => console.error(err));
})
