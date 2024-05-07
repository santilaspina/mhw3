function ChangeShopImgDefault(event) {
    const defaultImg = [    // questa è una lista di oggetti JSON
        {
            "id": "0",
            "name": "giubotto",
            "img": "\\immagini\\img-shop1\\giubotto.webp"
        },
        {
            "id": "1",
            "name": "camicia",
            "img": "\\immagini\\img-shop1\\camicia.avif"
        },
        {
            "id": "2",
            "name": "pantalone",
            "img": "\\immagini\\img-shop1\\pantalone.webp"
        },
        {
            "id": "3",
            "name": "scarpa",
            "img": "\\immagini\\img-shop1\\scarpa.webp"
        },
        {
            "id": "4",
            "name": "shoe2",
            "img": "\\immagini\\img-shop2\\shoe2.jpeg"
        },
        {
            "id": "5",
            "name": "shoe3",
            "img": "\\immagini\\img-shop2\\shoe3.jpeg"
        },
        {
            "id": "6",
            "name": "shoe4",
            "img": "\\immagini\\img-shop2\\shoe4.jpeg"
        },
        {
            "id": "7",
            "name": "shoe1",
            "img": "\\immagini\\img-shop2\\shoe1.jpeg"
        }


    ];
    const index = event.currentTarget.dataset.id;
    shop1items[index].src = defaultImg[index].img;

}



function ChangeShopImg(event) {
    const hoverImg = [
        {
            "id": "0",
            "name": "giubotto",
            "img": "\\immagini\\img-shop1\\img-hoover\\giubotto.png"
        },
        {
            "id": "1",
            "name": "camicia",
            "img": "\\immagini\\img-shop1\\img-hoover\\camicia.png"
        },
        {
            "id": "2",
            "name": "pantalone",
            "img": "\\immagini\\img-shop1\\img-hoover\\pantalone.png"
        },
        {
            "id": "3",
            "name": "scarpa",
            "img": "\\immagini\\img-shop1\\img-hoover\\scarpa.png"
        },
        {
            "id": "4",
            "name": "shoe2",
            "img": "\\immagini\\img-shop2\\img-hover\\shoe2.avif"
        },
        {
            "id": "5",
            "name": "shoe3",
            "img": "\\immagini\\img-shop2\\img-hover\\shoe3.avif"
        },
        {
            "id": "6",
            "name": "shoe4",
            "img": "\\immagini\\img-shop2\\img-hover\\shoe4.avif"
        },
        {
            "id": "7",
            "name": "shoe1",
            "img": "\\immagini\\img-shop2\\img-hover\\shoe1.avif"
        }
    ];
    const index = event.currentTarget.dataset.id;
    console.log(index);
    shop1items[index].src = hoverImg[index].img;
}




function addNewsItem(event) {
    const Objnews = [{
        "nome": "obj1",
        "img": "\\immagini\\img-news\\img-news-more\\img-Obj1.png",
        "title": "Thanks to Rihanna, No One Can Go Pantless Again",
        "sub-title": "(STYLE) 14 HOURS AGO"
    },
    {
        "nome": "obj2",
        "img": "\\immagini\\img-news\\img-news-more\\img-Obj2.png",
        "title": "KEEN's New Sghoe Leaves Nothin to the Immagination",
        "sub-title": "(STYLE) 17 HOURS AGO"
    },
    {
        "nome": "obj3",
        "img": "\\immagini\\img-news\\img-news-more\\img-Obj3.png",
        "title": "Ypur Favourite Perfume Could Be Used to Treat Depression",
        "sub-title": "(BEAUTY) 19 HOURS AGO"
    },
    {
        "nome": "obj4",
        "img": "\\immagini\\img-news\\img-news-more\\img-Obj4.png",
        "title": "The Gant Archive — A Shirt With History",
        "sub-title": "(STYLE, SPONSORED) 20 HOURS AGO"
    }
    ];

    const box = document.querySelector('.container-news');
    const container = document.createElement('div');
    const cntImg = document.createElement('div');
    const img = document.createElement('img');
    const cntText = document.createElement('div');
    const text = document.createElement('p');
    const subtitle = document.createElement('p');

    //qua devo usare JSON (vedi slide) per creare un oggetto Javascript.
    //All'interno dell'oggetto metto nome news, indirizzo immagine, testo titolo e testo subtitolo.


    container.classList.add('container-new');
    cntImg.classList.add('container-img-new');
    cntImg.classList.add('zoom');
    img.classList.add('img-big');
    cntText.classList.add('container-text-new');
    cntText.classList.add('font');
    text.classList.add('text-new');
    subtitle.classList.add('sub-title');

    console.log(img);



    img.src = Objnews[i].img;
    text.textContent = Objnews[i].title;
    subtitle.textContent = Objnews[i]["sub-title"];

    console.log(text);

    cntImg.appendChild(img);
    cntText.appendChild(text);
    cntText.appendChild(subtitle);

    container.appendChild(cntImg);
    container.appendChild(cntText);

    box.appendChild(container);
    console.log("hdhdhdhdh")
    i = i + 1;
}


const loadmore = document.querySelector('.box-loadmore');
loadmore.addEventListener('click', addNewsItem);
let i = 0; //indice degli oggetti della lista


const shop1items = document.getElementsByClassName('shop-img');
console.log(shop1items);


for (let y = 0; y < shop1items.length; y++) {
    shop1items[y].addEventListener('mouseenter', ChangeShopImg);
    shop1items[y].addEventListener('mouseleave', ChangeShopImgDefault);

}



document.addEventListener("DOMContentLoaded", mapsAPI); //appena finisce di caricare la pagina html chiama la funzione 



function mapsAPI() {
    var pos = { lat: 52.5028966, lng: 13.3237714 }; //pos è una variabile che indica la posizione in cui centrare la mappa
    var map = new google.maps.Map(document.getElementById('map'), { //questo crea l'oggetto mappa di google e lo mette dentra il div con id = map
        center: pos, zoom: 14
    })

    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "Highsnobiety Berlin Office"
    });
}


//API spotify

const client_id = '2bae09ae31ad44d6bb99c0c9505c9804';
const client_secret = '9fdb386fa4424b8090fa1c35b0982402';

const tokenURL = 'https://accounts.spotify.com/api/token';

function onTokenResponse(response) {
    return response.json();
}
function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
}

function onJson(json) {
    console.log(json);

    for (let i = 0; i < 4; i++) {
        //creo gli elementi da aggiungere alla pagina
        const img = document.createElement('img');
        img.classList.add('shop-img');
        img.classList.add('zoom');
        img.src = json.albums.items[i].images[2].url;



        const cnt = document.querySelectorAll('.container-shop-items.music .item-img')
        console.log(cnt);
        cnt[i].appendChild(img);

        const title = document.querySelectorAll('.container-shop-items.music .item-name.font');
        console.log(title);
        title[i].textContent = json.albums.items[i].artists[0].name;

        const subtitle = document.querySelectorAll('.container-shop-items.music .item-description.font');
        console.log(subtitle);
        subtitle[i].textContent = json.albums.items[i].name

    }







}

function getToken(json) {
    console.log(json);
    token = json.access_token;
    getAlbum(token);
}
let token;
fetch(tokenURL,
    {
        method: "post",
        body: 'grant_type=client_credentials',
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)

        },

        json: true
    }
).then(onTokenResponse).then(getToken);




function getAlbum(token) {
    fetch('https://api.spotify.com/v1/browse/new-releases', {
        method: "get",
        headers: { 'Authorization': 'Bearer ' + token, }
    }).then(onResponse).then(onJson);
}






