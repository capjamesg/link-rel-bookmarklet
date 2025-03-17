var relLinks = document.querySelectorAll("link[rel], a[rel]");

relLinks = Array.from(relLinks).sort((a, b) => {
    var aRel = a.getAttribute("rel");
    var bRel = b.getAttribute("rel");
    return aRel.localeCompare(bRel);
});

relLinks = relLinks.filter(link => {
    var rel = link.getAttribute("rel");
    return !["noopener", "noreferrer", "nofollow"].includes(rel);
});

var relLinksDiv = document.createElement("ul");
relLinksDiv.id = "rel-links";
relLinksDiv.style.padding = "1rem";
relLinksDiv.style.position = "fixed";
relLinksDiv.style.bottom = "0";
relLinksDiv.style.width = "35rem";
relLinksDiv.style.left = "0";
relLinksDiv.style.listStyle = "none";
relLinksDiv.style.backgroundColor = "white";
relLinksDiv.style.border = "1px solid black";
relLinksDiv.style.margin = "0";
relLinksDiv.style.maxHeight = "50vh";
relLinksDiv.style.overflow = "auto";
relLinksDiv.style.fontSize = "1rem";
document.body.appendChild(relLinksDiv);
var relLinksDiv = document.querySelector("#rel-links");

relLinks.forEach(function (link) {
    var rel = link.getAttribute("rel");
    var href = link.getAttribute("href");
    var li = document.createElement("li");
    li.style.display = "grid";
    li.style.gridTemplateColumns = "1fr 3fr";
    var relName = document.createElement("span");
    relName.textContent = rel;
    relName.style.whiteSpace = "wrap";
    relName.style.wordBreak = "break-all";
    relName.style.color = "black";
    li.appendChild(relName);
    var linkAnchor = document.createElement("a");
    linkAnchor.href = href;
    linkAnchor.style.borderBottom = "none";
    linkAnchor.textContent = href;
    li.appendChild(linkAnchor);
    relLinksDiv.appendChild(li);
    console.log(rel, href);
});
