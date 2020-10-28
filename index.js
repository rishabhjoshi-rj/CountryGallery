const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "row");

app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  //    //parse the received data
  if (request.status >= 200 && request.status < 400) {
    data.forEach((country) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card col-sm-12 col-md-6 col-lg-3");
      //   card.setAttribute('style', 'padding : 2ren');

      //   card.classList.add('thumbnail');
      //   card.classList.add('cl-sm-3');

      const img = document.createElement("IMG");
      img.setAttribute("id", "imgs");
      img.src = country.flag;

      const h1 = document.createElement("h1");
      h1.setAttribute("id", "name");
      h1.textContent = `Name: ${country.name}`;

      const h2 = document.createElement("h1");
      h2.textContent = `Capital: ${country.capital}`;

      const h3 = document.createElement("h1");
      h3.textContent = `Currency: ${country.currencies[0].name}`;

      const h4 = document.createElement("h1");
      const t = country.languages.map((e1) => e1.name);
      const lang = t.join(", ");

      h4.textContent = `Language: ${lang}`;

      container.appendChild(card);
      card.appendChild(img);
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(h4);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }

  // const html  = `
  // Name: ${.name}

  // `;
  // document.getElementById('top').insertAdjacentElement('afterend', html);

  //****************************************

  x = document.querySelector("#top");

  y = document.querySelector("#bottom");

  x.addEventListener("click", (e) => {
    x.style.display = "none";
    y.style.display = "block";

    b = document.createElement("button");
    b.setAttribute("id", "btn");
    b.setAttribute("class", "btn btn-success");
    b.textContent = "GO BACK";

    // Country Name of particular click
    const img = e.target.querySelector("img").src;
    console.log(img);

    var country = e.target.querySelector("h1").innerHTML;
    countryName = country.substring(6);
    console.log(countryName);

    console.log(e.target);
    const c = data.filter((country) => country.name === countryName);
    console.log(c);
    h = document.createElement("h1");
    h.setAttribute("class", "display-4");
    h.setAttribute("style", "text-align:center");
    h.innerHTML = `Name: ${countryName}`;

    h2 = document.createElement("h1");
    h2.setAttribute("class", "display-4");
    h2.setAttribute("style", "text-align:center");
    h2.innerHTML = `Capital: ${c[0].capital}`;

    h3 = document.createElement("h1");
    h3.setAttribute("class", "display-4");
    h3.setAttribute("style", "text-align:center");
    h3.innerHTML = `Currency: ${c[0].currencies[0].name}`;

    h4 = document.createElement("h1");
    h4.setAttribute("class", "display-4");
    h4.setAttribute("style", "text-align:center");
    h4.innerHTML = `Calling Code: ${c[0].callingCodes}`;

    h5 = document.createElement("h1");
    h5.setAttribute("class", "display-4");
    h5.setAttribute("style", "text-align:center");
    h5.innerHTML = `Native Name: ${c[0].nativeName}`;

    h6 = document.createElement("h1");
    h6.setAttribute("class", "display-4");
    h6.setAttribute("style", "text-align:center");
    h6.innerHTML = `Population: ${c[0].population}`;

    h7 = document.createElement("h1");
    h7.setAttribute("class", "display-4");
    h7.setAttribute("style", "text-align:center");
    h7.innerHTML = `Region: ${c[0].region}`;

    h8 = document.createElement("h1");
    h8.setAttribute("class", "display-4");
    h8.setAttribute("style", "text-align:center");
    h8.innerHTML = `SubRegion: ${c[0].subregion}`;

    h9 = document.createElement("h1");
    h9.setAttribute("class", "display-4");
    h9.setAttribute("style", "text-align:center");
    h9.innerHTML = `Area: ${c[0].area}`;

    const image = document.createElement("IMG");
    image.setAttribute("id", "img2");
    image.src = img;

    y.appendChild(b);
    y.appendChild(image);
    y.appendChild(h);
    y.appendChild(h2);
    y.appendChild(h3);
    y.appendChild(h4);
    y.appendChild(h5);
    y.appendChild(h6);
    y.appendChild(h7);
    y.appendChild(h8);
    y.appendChild(h9);
  });

  // function myFunction() {
  //     x.style.display = "none";
  //     y.style.display="block"

  //     b=document.createElement('button');
  //     b.setAttribute('id','btn');
  //     b.setAttribute('class','btn btn-success');
  //     b.textContent="GO BACK";

  //     const p =document.createElement('h1');
  //     p.innerHTML="Hello";
  //     y.appendChild(b);
  //     y.appendChild(p);

  // }

  document.querySelector("#bottom").addEventListener("click", (e) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    y.innerHTML = "";
  });
};
request.send();
