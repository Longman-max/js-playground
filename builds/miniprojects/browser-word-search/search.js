function findWord() {
  var paragraph = document.getElementById("text");
  var inputElement = document.getElementById("search-input");

  var paragraphText = paragraph.innerText || paragraph.textContent;

  var searchText = inputElement.value;

  if (searchText !== "") {
    var occurences = (paragraphText.match(new RegExp(searchText, "gi")) || [])
      .length;

    var result = document.getElementById("display-search-result");

    if (occurences > 0 && searchText.length > 2) {
      result.innerHTML = `<p class='display-result'>Found '${occurences}' results for '<span class='searched-word'>${searchText} </span> '</p>`;
      // paragraphText.clasList.add("found");
    } else if (searchText.length > 2) {
      result.innerHTML = `<p class='display-result' >
    Couldn't find '<span class='searched-word'>${searchText}</span>'
    </p>
    <p class='search-tip'>
    Try searching again using a different spelling or keyword.</p>
    `;
    }
  }

  if (document.body.innerText.includes(searchText)) {
    console.log(true);
    paragraph.classList.add("found");
  } else if (!document.body.innerText.includes(searchText)) {
    paragraph.classList.remove("found");
  }
}
