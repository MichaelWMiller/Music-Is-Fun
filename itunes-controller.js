function ItunesController() {
    var itunesService = new ItunesService()
        //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
    }

    //Start coding here
    function drawSongs(results) {

        if (results.length == 0) {
            document.getElementById("placeHolder").innerHTML = "Please Enter Search Criteria"
            return
        }
        var searchInput = ""

        var template = ``
        var arr = []
        var len = results.length
        var rowsElem = document.getElementById("flxRow")
        if (!document.getElementById("searchKey").textContent == "...") {
            searchInput = document.getElementById("searchKey").innerHTML
        } else {
            return
        }


        for (var i = 0; i < len; i++) {
            arr.push(results[i])
        }

        for (i = 0; i < arr.length; i++) {
            if (!arr[i]['price']) {
                arr[i]['price'] = "unavailable"
            }
            template += `
            <div class="col-md-4">
                <div class="card pretty-up" style="width: 40rem;">
                <h4 class="card-title"><center>${arr[i]['title']}</center></h4>
                    <img class="card-img-top card-outline-primary img-responsive" src="${arr[i][ 'albumArt']}" alt="Card image cap">
                    <div class="card-body">
                    <div>
                    <h4 id="artist">${arr[i]['artist']}</h4>
                    </div>
                    <div>
                      <h4>$${arr[i]['price']}</h4>
                      </div>
                      <audio src="${arr[i]['preview']}" controls="controls" style="width: 20reml">
                      </audio>
                    </div>
                </div>
            </div>
          `
        }


        searchInput.innerHTML = arr[0]["artist"]
        rowsElem.innerHTML = template
    }

}