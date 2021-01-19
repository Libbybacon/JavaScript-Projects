function showAuthor(author) {
    var authorName = author.getAttribute("data-author-name");
    alert(authorName + " wrote the book " + author.innerHTML);
}

//Not quite sure exactly how this works...