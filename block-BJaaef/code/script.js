
let ul = document.createElement("ul");
got.houses.forEach ((gotdetails) => {
    gotdetails.people.forEach((peopledetails) => {
        let li = document.createElement("li");
        li.classList.add("box");
        let flex = document.createElement("div");
        flex.classList.add("flex");
        let img = document.createElement("img");
        img.src = peopledetails.image;
        let h2 = document.createElement("h2");
        h2.innerText = peopledetails.name;
        let p = document.createElement("p");
        p.innerText = peopledetails.description;
        let more = document.createElement("a");
        more.classList.add("more-btn");
        more.innerText = "Learn More";
        
        ul.append(li);
        flex.append(img,h2);
        li.append(flex,p,more);
    });
});
document.querySelector(".container").append(ul);