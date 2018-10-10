$(document).ready(function () {
  newquote();
  $("#new-quote").on("click", function () {
    $(".cite-output").toggleClass("cite-output2");
    $(".quote").slideUp(500);
    $(".author").slideUp(500);
    setTimeout(function () {newquote();}, 500);
    $(".quote").slideDown(500);
    $(".author").slideDown(500);
  });
});

function newquote() {
  $.getJSON(
  "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
  function (json) {
    $(".quote").text(json.quoteText);
    $(".author").text(json.quoteAuthor);
    $("#tweet-quote").attr(
    "href",
    'https://twitter.com/intent/tweet?text="' +
    encodeURIComponent(json.quoteText) +
    '" ' +
    encodeURIComponent(json.quoteAuthor));

  });

}