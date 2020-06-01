// const URL =
//   "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";


//   fetch(URL)
//   .then((response) => response.json())
//   .then((myJson) => forImageAndColumnDelay(myJson))


//   let columnArray = [];
//   let rowArray = [];
//   const forImageAndColumnDelay = (something) => {
    
//     for (let i = 0; i < something.length; i++) {
//       const element = something[i];
//       const index = i;
//       //console.log(element);
//       if (index % 4 === 0) {
//         forRowOnly(element);
//       } else {
//         forImageAndColumn(element);
//       }
    
      
      
     
//     }
//   }
 

//   const forRowOnly = (element)=>{
//     //console.log(something);
//      const {
//        url,
//        author,
//        pubdate,
//        upvotes,
//        views
//      } = element;
//     const containerDiv = document.querySelector('#app');
//     const divRow = document.createElement('div');
//     divRow.className = 'row';

//     const column = document.createElement('div')
//     column.className = 'column'
//     columnArray.push(column);
//     rowArray.push(divRow);

    

//     const image = document.createElement('img')
//     image.src = url;

//     containerDiv.appendChild(divRow)
//     divRow.appendChild(column)
//     column.appendChild(image)

//   }
  
//   const forImageAndColumn = (element) =>{
//      const {
//        url,
//        author,
//        pubdate,
//        upvotes,
//        views
//      } = element;
//      //console.log(pubdate);
//      const containerDiv = document.querySelector('#app');
//      const divRow = containerDiv.lastElementChild;
     

//      const column = document.createElement('div');
//      column.className = 'column';
//      columnArray.push(column);

//      const image = document.createElement('img');
//      image.src = url;

//      divRow.appendChild(column);
//      column.appendChild(image);


//   }
//   console.log(rowArray);

//above is done little diffrently but is good................................................................
  
//solution
document.body.style.backgroundColor = 'lightblue'
const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

const mock = [{
    "title": "Canada",
    "author": null,
    "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/canada.jpg",
    "pubdate": null,
    "upvotes": 60,
    "views": 1195
  },
  {
    "title": "Alps",
    "author": "Didier Baertshiger",
    "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/alps.jpg",
    "pubdate": 1413590400000,
    "upvotes": 67,
    "views": 1266
  },
  {
    "title": "Elk",
    "author": "Thomas Lefebvre",
    "url": null,
    "pubdate": 1415145600000,
    "upvotes": 83,
    "views": 3048
  },
  {
    "title": "France",
    "author": "Didier Baertshiger",
    "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/france.jpg",
    "pubdate": 1413590400000,
    "upvotes": 55,
    "views": 1193
  },
  {
    "title": "Gray Fields",
    "author": "Jeff Sheldon",
    "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/gray-fields.jpg",
    "pubdate": 1418342400000,
    "upvotes": 130,
    "views": 1283
  },
  {
    "title": "Lake",
    "author": "Didier Baertshiger",
    "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/lake.jpg",
    "pubdate": 1416009600000,
    "upvotes": 2345,
    "views": 139
  }
]

const errorImage = 'https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/401-error-wordpress-featured-image.jpg';

// const getPhotosInfo = (URL) => {
//   fetch(URL)
//   .then((response) => onResponse(response))
//   .catch((err) => onError(err))
// }

// getPhotosInfo(URL)

// const onResponse = (response) => {
//   response.json()
//   .then((myJson) => forImageAndColumnDelay(myJson))
// }

// const onError = (err) => console.error(err);




const container = document.querySelector('#app');

const createRow = () => {
const divRow = document.createElement('div');
divRow.className = 'row';
container.appendChild(divRow);
return divRow;
}




  const forImageAndColumnDelay = (something) => {
    //console.log(something);
    
    
    for (let i in something) {
      const element = something[i];

      //console.log(element);
      const columnNumber = i % 4;
      setTimeout(()=>addEachImage(element, columnNumber), 300 * i)
    
      
      
     
    }
  }

  forImageAndColumnDelay(mock)
 

 
  
  const addEachImage = (element, columnNumber) =>{
    //donot use const while deconstruction if one of the properties inside needs to be 
    //changed later.
    let {
      url,
      author,
      pubdate,
      upvotes,
      views
    } = element;  

    const date = new Date(pubdate)
    let completeDate;
   
    
    //console.log(date);

    

console.log(url);




  
 if (columnNumber === 0){
 row = createRow();
 }
    const column = document.createElement('div');
    column.className = 'column';
     //console.log(columnNumber)


     const image = document.createElement('img');
     //defensive in case of url is null or Undefined in an array....and its placed here to give the style in case of missing.
     if (!url) {
       url = errorImage;
       image.style.opacity = '0.4'
     }
     image.src = url;

    

    const authorSpan = document.createElement('span');
    authorSpan.className = 'author';
    //defensive in case of author is null or Undefined in an array....and its placed here to give the style in case of missing.
    if (!author) {
      author = "Sorry ! but the author is unknown :("
      authorSpan.style.color = 'red'
    }

    authorSpan.innerText = `Author: ${author}`;

    const dateSpan = document.createElement('span');
    dateSpan.className = 'date';
    dateSpan.style.fontSize = '12px'
    dateSpan.style.display = 'block'
    //defensive in case of date is null or Undefined in an array....and its placed here to give the style in case of missing.
     if (pubdate) {
       completeDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`
     } else {
       completeDate = "Date is not given"
       dateSpan.style.color = 'red';
     }
     console.log(completeDate);
     dateSpan.innerText = `Date: ${completeDate}`;


     const upvotesDiv = document.createElement('span');
     upvotesDiv.className = 'upvotes';
     upvotesDiv.innerHTML = `Votes : ${upvotes}`; 



    
                                

    
    column.appendChild(image)
    row.appendChild(column);
    column.appendChild(authorSpan);
    column.appendChild(dateSpan);
    column.appendChild(upvotesDiv)
     
     


  }



  







  



