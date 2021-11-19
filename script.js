var url = 'https://api.nytimes.com/svc/topstories/v2/home.json?&api-key=gkmtFHJTyX4Zn4pyCM9z5GoZ101gv0iJ';
 
$.getJSON(url, function (data) {
  var output = data.results;
 
  pubInfo.innerHTML = `${data.copyright}<br><br><br>`;
  for (var i = 0; i < output.length; i++) {
    display.innerHTML += 
    `
   <h3> ${output[i].title}</h3>
    
    ${output[i].byline}
    <br>
    <p>Section: ${output[i].section}</p>

    <br>
    ${output[i].abstract}
    <br><br>
    <a href="${output[i].url}">Link to Article<a>
   <br>
   
  
    <br>
    <br>
    <br>
    
    `;
  }
});