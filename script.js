window.onload = function() {
  mtpre = document.querySelector("#multitracks pre")
  for (var i = 65; i <= 90; i++) {
    var mttxt = document.createElement("a")
    mttxt.setAttribute("href", "https://multitrackdownloads.blogspot.com/2012/03/multitracks-" + String.fromCharCode(i).toLowerCase() + ".html")
    mtpre.innerHTML += "  - "
    mttxt.innerText = "LETRA " + String.fromCharCode(i)
    mtpre.appendChild(mttxt)
    mtpre.innerHTML += "\n"
  }

    const details = document.querySelectorAll("details");

    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    })

    document.querySelectorAll("a").forEach(el => el.textContent = "[" + el.textContent + "]")
    document.querySelectorAll("a").forEach(el => el.setAttribute("target", "_blank"))

    var arraytxt = []
    var arrayorg = []
    document.querySelectorAll("details[disabled] summary").forEach(el => arraytxt.push(el))
    document.querySelectorAll("details[disabled] summary").forEach(el => arrayorg.push(el.innerText))
    
    arraytxt.forEach(txt => txt.innerText = "[bloqueado]")
    
    check = function(val) {
      if (val.value == "tSHUTUP" || val.value == "SHUTUP") {
          val.remove();
          document.querySelectorAll("details[disabled='']").forEach(el => el.removeAttribute("disabled"))
          document.querySelectorAll(".wrapper").forEach(el => el.removeAttribute("class"))
          arraytxt.forEach(function (txt, i) { txt.innerText = arrayorg[i] })
      } else {
          console.clear()
          console.log(val.value)
      }
    }

    document.onkeyup = function(e) {
    var input = document.getElementById('pass');
      if (input.style.display == 'none') {
          input.value += String.fromCharCode(e.keyCode || e.which);
	  check(document.querySelectorAll("input")[0])
      }
    };

    ;/* -> not useful
    function removell(x) {
      if(x.lastIndexOf("\n")>0) {
          return x.substring(0, x.lastIndexOf("\n"));
      } else {
          return x;
      }
    }*/
    //const code = document.querySelectorAll("pre");
    //[...code].forEach(el => el.textContent = removell(el.textContent));
    //[...code].forEach(el => el.textContent = el.textContent.replace(/^\n/,''));
    // more js HERE
  };