// // const URL =
// //   "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

// // /*
// // fetch('url')
// // .then(Resolve)
// // .then(Reject) OR .catch(Reject)

// // OR directly 

// // fetch('url').then(ResolveFuntion, RejectFuntion)

// // */
// // fetch(URL)
// //   .then((response) => response.json().then((photos) => onPhotosReady(photos)))
// //   .catch((err) => console.error(err));

// // const app = document.querySelector("#app");

// // const onPhotosReady = (photos) => {
// //   // HINT
// //   // if i===4-1 ? create a row  else create a column
// //   // i===8-1 ? create a row else create a column
// //   // i===12-1 ? create a row else create a column
// //   const divRow = document.createElement("div");
// //   divRow.className = "row";
// //   app.appendChild(divRow);

// //   for (let i = 0; i < photos.length; i++) {
// //     const element = photos[i];
// //     console.log("What is this", element);

// //     const { url } = photos[i];
// //     setTimeout(() => addEachImage(url), 500 * i);
// //   }
// // };

// // const addEachImage = (url) => {
// //   const divColumn = document.createElement("div");
// //   divColumn.className = "column";
// //   const image = document.createElement("img");
// //   image.src = url;

// //   let divRow = document.querySelector('.row')
// //   divColumn.appendChild(image);
// //   divRow.appendChild(divColumn);

// // };


// // //..............started doing here myself...........................
// document.body.style.background = 'green';
// const URL = "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

// fetch(URL)
//   .then(infoGallery => infoGallery.json())
//   .then(photos => photoGallery(photos))
  

// // concept to applied to build the following
// //div.app
//           //div.row
//                     //div.column
//                                 //image.src = url;
//                     //div.column
//           //div.row
// //div.app


// //creating the div element and giving classname row..
// const forDivRow = () => {
//   const appDiv = document.querySelector('#app');
//   const rowDiv = document.createElement('div');
//   rowDiv.className = "row";
//   appDiv.appendChild(rowDiv);

// }

// //creating column, creating the image with the src as the url that will  be
// //deconstructed below the execution of this function before following the es6 order.
// const addImageandColumn = (url, author, views) => {
//   let authorParagrapgh = document.createElement('p');
//   authorParagrapgh.innerText = author;
//   let viewsparagraph = document.createElement('p');
//   viewsparagraph.innerText = views;



//   const image = document.createElement('img');
//   image.src = url

//   const columnDiv = document.createElement('div');
//   columnDiv.className = 'column'
//   columnDiv.style = 'background: white; padding:2px'
//   const rowDiv = document.querySelector('.row')
//   rowDiv.appendChild(columnDiv);
//   columnDiv.appendChild(image);
//     // columnDiv.appendChild(authorParagrapgh);
//     // columnDiv.appendChild(viewsparagraph);
// }


// const photoGallery = (photos) => {
//   for (let i in photos) {
//     const element = photos[i]
   
//     //url deconstructed from the photos object....every time the index changes it deconstructs it form that specific index of the array.
//     const {url, title, author, upvotes, views, pubdate} = element
//     //console.log('URL', url)
//    // console.log('our image is', i % 4);
    

//     //setting timeout that adds the photos on the gapp of 3 ms.
//      if (i % 3 === 0) {
//        forDivRow()
//      }else{
//       addImageandColumn(url)
//      }
    

//   }
// }

const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

fetch(URL)
  .then((response) => response.json().then((photos) => onPhotosReady(photos)))
  .catch((err) => console.error(err));

const app = document.querySelector("#app");

const onPhotosReady = (photos) => {
  for (let i = 0; i < photos.length; i++) {
    const { url } = photos[i];
    //inserting photos as 4 column grid
    if (i % 4 === 0) {
      insertRow(url);
    } else {
      insertColumn(url);
    }
  }
};

//Creating rows
const insertRow = (url) => {
  const divRow = document.createElement("div");
  divRow.className = "row";
  const divColumn = document.createElement("div");
  divColumn.className = "column";
  const image = document.createElement("img");
  image.src = url;

  divColumn.appendChild(image);
  divRow.appendChild(divColumn);
  app.appendChild(divRow);
};

//Creating columns
const insertColumn = (url) => {
  const divColumn = document.createElement("div");
  divColumn.className = "column";
  const image = document.createElement("img");
  image.src = url;
  const row = document.querySelector("#app").lastElementChild;
  divColumn.appendChild(image);
  row.appendChild(divColumn);
};  