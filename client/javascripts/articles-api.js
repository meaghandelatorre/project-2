// jshint esversion: 6

let controller = function(){
/*
    let prefixURL = "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
    let suffixURL = "&format=json&jsoncallback=?";
    //get value entered by user from textbox
    //(3 letters of the alphabet and put here)
  //  let flickrTag = document.querySelector("input[type=text]").value;

    let flickrTag = $("input").val();
    console.log(flickrTag);
  */

    let requestURL = 'https://thejsway-server.herokuapp.com/api/articles';
    console.log(requestURL);
    //clear old photos - read book
   document.querySelector(".photos").innerHTML = "";
    //$(".photos").????("");

  $.getJSON(requestURL, function(response) {
    let firstArticle = response[0];
    console.log(`Article $[firstArticle.id]
    Title: $[firstArticle.title]
    Content: $[firstArticle.content]`);

    let articlesElement = document.getElementsByClassName("articles")

    response.forEach(functions(item, index) {
      let newDiv = document.createElement("div");
      document.querySelector(".articles").appendChild(newDiv);

      let newH3 = document.createElement("h3");
      newH3.textContent = `Article ${item.id}`;
      newDiv.appendChild(newH3);

      let titleParagraph = document.createelemnt("p");
      titleParagraph.textContent = item.title;
      newDiv.appendChild(titleParagraph);

      let bodyParagraph = document.createElement("p");
      bodyParagraph.textContent = item.content;
      newDiv.appendChild(bodyParagraph);

    }



  //  flickrResponse.items.forEach(function(item, index) {
/*
      //Flickr returns 20 images by default
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new JQuery element to hold the image
        // but hide it so we can fade it in
        let $img = $("<img>").hide();

        // set the attribute to the url
        // contained in the response
        $img.attr("src", item.media.m);
        $img.attr("width", "150");

        // attach the img tag to the main
        // photos element and then fade it in
        $(".photos").append($img);
        $img.fadeIn();
      }
    });

  }
);
*/
)};


//$(document).ready(controller);



//Register the controller after the DOM is complete
window.addEventListener("load", () => {
  //select the button
  let button = document.querySelector("button");


  //register the click handler for the button
  button.addEventListener("click", controller);
});
