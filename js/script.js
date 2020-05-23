let max_results = 10;
let base = "https://www.youtube.com/embed/";

function RandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}
 
function getVideo(query) {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: "AIzaSyCKB2dhiYDfdMNBD7emZPM18boEZ07uTCc",
            q: query,
            part: 'snippet',
            maxResults: max_results,
            type: 'video',
            videoEmbeddable: true
        },
        success: function(data){
            let i = Math.floor(Math.random() * max_results)
            let videoId = data.items[i].id.videoId;
            
            let video = $("#video") // JQuery way of getting element. The # makes it get by ID
            video.attr("src", base + videoId);
            video.addClass("opened");
        },
        error: function(response){
            alert("Youtube Request failed (Reason in Console)")
            console.log("Youtube Request Failed");
            console.log(response.responseText);
        }
    });
  }

document.getElementById("gen").addEventListener("click", function() {
    word = RandomWord();
    console.log(word);

    getVideo(word);
});
