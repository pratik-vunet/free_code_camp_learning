
        const apiKey = '61bf611'; 
        let page=1;
        let query="";
        let debounceTimer;
        const previousButton=document.getElementById("preBtn");
        const nextButton=document.getElementById("nextBtn");
        function debounce(func, wait) {
            return function(...args) {
                if (debounceTimer) clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => func.apply(this, args), wait);
            };
        }

        function fetchMovies(query) {
            fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=${page}`)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === 'True') {
                        displayResults(data.Search);
                    } else {
                        document.getElementById('results').innerHTML = `<p >No Movies</p>`;
                    }
                })
                .catch(error => console.error('Error fetching data:', error));
        }

        function displayResults(movies) {
            const resultsDiv = document.getElementById('results');
            
            resultsDiv.innerHTML = movies.map(movie => `
                <div class="movies" id="${movie.imdbID}" >
                    <div >
                    <img class="images" src="${movie.Poster}" alt="${movie.Title} poster">
                    
                        <h3>${movie.Title}</h3>
                        <p>${movie.Year}</p>
                    
                    </div>
                </div>
            `).join('');
            document.querySelectorAll(".movies").forEach(movie=>{
                movie.addEventListener("click",()=>{
                    const id=movie.getAttribute("id");
                    fetchMovieDetails(id);
                });
            });

            

            
        }

        function fetchMovieDetails(id){
            fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
            .then(response=>response.json())
            .then(data=>{
                if(data.response==='True')
                {
                    displayMovieDetails(data);
                }
                
            })
            .catch(error=>console.error("Error: ",error));


        }

           function fetchMovieDetails(imdbID) {
       fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
           .then(response => response.json())
           .then(data => {
               if (data.Response === 'True') {
                   displayMovieDetails(data);
               } else {
                   document.getElementById('movieDetails').innerHTML = `<p>${data.Error}</p>`;
               }
           })
           .catch(error => console.error('Error fetching movie details:', error));
   }

        


        function displayMovieDetails(movie)
        {
            document.getElementById("movieDetails").innerHTML=
            `
            <div id="detailMovie" >
           <div>
           <img id="detailImage" src="${movie.Poster }" alt="${movie.Title} poster">
           <h2>${movie.Title} (${movie.Year})</h2>
           </div>
           <div id="detailMovieInfo" >
           <p><strong>Genre:</strong> ${movie.Genre}</p>
           <p><strong>Director:</strong> ${movie.Director}</p>
           <p><strong>Actors:</strong> ${movie.Actors}</p>
           <p><strong>Plot:</strong> ${movie.Plot}</p>
           <p><strong>Language:</strong> ${movie.Language}</p>
           <p><strong>Rated:</strong> ${movie.Rated}</p>
           <p><strong>Runtime:</strong> ${movie.Runtime}</p>
           <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
           </div>
           </div>
       `
        }


        function handleSearch() {
            query = document.getElementById('movieInput').value.trim();
            if (query) {
                fetchMovies(query);
            }
        }
        
        const debouncedSearch = debounce(handleSearch, 1000);
       
        document.getElementById('movieInput').addEventListener('input', debouncedSearch);
  function goPrev()
  {
    
    
        
    page-=1;
    
    fetchMovies(query)

  }
  function goNext()
  {
    
    page+=1;
    
    fetchMovies(query)

  }

  window.addEventListener("load", function() {
    query="hindi";
    fetchMovies(query)

});