$(document).ready(function() {
// write your code here
var tableEl = document.getElementById('top-spots-table');

$.getJSON( "./data.json", function( data ) {
    for(var i = 0; i < data.length; i++){

        console.log(data[i].name);

        var title = data[i].name;
        var description = data[i].description;
        var location = data[i].location;

        var tableRowEl = document.createElement("tr");

        tableEl.appendChild(tableRowEl);
        
        var titleRow = document.createElement("td");
        var descriptionRow = document.createElement("td");
        var locationRow = document.createElement("td");
        var locationButton = document.createElement("button");

        titleRow.textContent = title;
        descriptionRow.textContent = description;
        $("locationButton").attr("href", "https://www.google.com/maps?q=" + location[0] + "," + location[1]);
        //locationRow.textContent = location;

        locationRow.appendChild(locationButton);

        tableRowEl.appendChild(titleRow);
        tableRowEl.appendChild(descriptionRow);
        tableRowEl.appendChild(locationRow);


    }

    console.log(data);
  })

});
