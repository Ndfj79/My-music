let container = document.querySelector(`.album`);
let tracks = document.querySelector(`.playlist`);
let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);

let album = albums[i];

if (!album){
    container.innerHTML = `ОШИБКА ЁБАНАЯ`
    setTimeout(() => {
        window.location.pathname = `index.html`;
        window.location.search = ``;
    }, 5000);
}
else{
    container.innerHTML += `
    <div class="card mb-3">
        <div class='row'>
            <div class='col-4'>
                <img src="${album.img}" alt="" class="img-fluid rounded-start">
            </div>
            <div class='col-8'>
                <div class="card-body">
                    <h5 class="card-title">
                        ${album.title}
                        <p class="card-text">${album.description}</p>
                        <p class="card-text">
                            <small class="text-muted">${album.year}</small>                                            
                        </p>
                    </h5>
                </div>    
            </div>
        </div>
    </div>`;
    
    let playlist = album.tracks;
    for (let i=0; i<playlist.length; i++){
        let track = playlist[i];
        
        tracks.innerHTML += `
        <li class="list-group-item d-flex align-items-center ">
            <img src="assets/free-icon-play-button-149668.png" alt="" height="30px">
            <div>
                <div class='ms-3'>${track.title}</div>
                <div class='ms-3'>${track.author}</div>
            </div>
            <div class='ms-auto'>${track.time}</div>
        </li>`;
    }
}