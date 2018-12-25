console.log("Looking for phone numbers. - Craigslist Number Extractor");

function findNumber(text) {
    var words = text.split(" ");
    for (i = 0; i < words.length; i++) {
        if (words[i].includes("9")) {
            console.log(words[i]);
        }
    }
}

function getBody() {
    var body = document.getElementById("postingbody").innerHTML;
    findNumber(body);
}

getBody()
