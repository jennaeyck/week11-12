// hier komt je code
// console.log("Hallo wereld!");
var body = function() {
      var mijnAfbeeldingen = document.getElementsByTagName('img');
      var mijnTijdelijeArray = [];
      var teller = 0;
      while (teller < mijnAfbeeldingen.length) {
            mijnTijdelijkeArray[teller] = mijnAfbeeldingen[teller].getAttribute("src");
            teller = teller+1;
      }
      console.log(mijnTijdelijkeArray);

      var teller2 = 0;
      while(teller2 < mijnAfbeeldingen.length) {
            if (teller2 === 11) {
                  mijnAfbeeldingen[teller2].setAttribute("src",mijnTijdelijkeArray[0]);}
            else {
                  mijnAfbeeldingen[teller2].setAttribute("src",mijnTijdelijkeArray[teller2+1]);}
            teller2 = teller2+1;}
      } setInterval(body,2500);

/*light/dark mode*/
  let darkLink = document.querySelectorAll("nav a")[0];
  let lightLink = document.querySelectorAll("nav a")[1];
  let mijnBody = document.querySelector("body");
  function switchToLight() {mijnBody.classList.add("light");}
  function switchToDark() {mijnBody.classList.remove("light");}
  lightLink.addEventListener("click",switchToLight);
  darkLink.addEventListener("click",switchToDark);
