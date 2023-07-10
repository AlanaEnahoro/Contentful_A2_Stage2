var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: 'z185uaf2ygi2',
    accessToken: 'RsxeIFeWNyo7uZg7PTYJa_3p2ER70FbuiqDV8cmN28w',
  });

  client.getEntry(id).then(function (entry) {
    var title = document.createElement('h2');
    title.innerHTML = entry.fields.title;
  
    var detialsContainer = document.getElementById("place-for-content-details");
    var maindisplay = document.getElementById("maindisplay");

    var coverImage = document.createElement("img");
    coverImage.src = entry.fields.coverImg.fields.file.url;
    console.log(entry.fields.coverImg.fields.file.url);
    coverImage.classList.add("cover-image");
    maindisplay.append(coverImage);

    maindisplay.append(title)
    console.log(entry);
    var gallery = document.createElement('div');
    detialsContainer.append(gallery);

    entry.fields.gallery.forEach(function (galleryimage){
        console.log(galleryimage);
        var image = document.createElement("img");
        image.src = galleryimage.fields.file.url
        gallery.append(image);
    })
  
});