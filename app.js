const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";


  fetch(URL)
  .then((response) => response.json())
  .then((myJson) => finalGallery(myJson))


  const finalGallery = (something) => {
    forRowOnly();
    forImageAndColumnDelay(something)
} 

  const forImageAndColumnDelay = (something) => {
    
    for (let i = 0; i < something.length; i++) {
      const element = something[i];
      const index = i;
      //console.log(element);
      
      setTimeout( () => forImageAndColumn(element), 400 * index)
     
    }
  }

  const forRowOnly = ()=>{
    //console.log(something);
    const containerDiv = document.querySelector('#app');
    const divRow = document.createElement('div');
    divRow.className = 'row';
    containerDiv.appendChild(divRow)

  }
  
  const forImageAndColumn = (element) =>{
     const {
       url,
       author,
       pubdate,
       upvotes,
       views
     } = element;
     //console.log(pubdate);
     const divRow = document.querySelector('.row');

     const column = document.createElement('div');
     column.className = 'column';

     const image = document.createElement('img');
     image.src = url;

     divRow.appendChild(column);
     column.appendChild(image);


  }



  



