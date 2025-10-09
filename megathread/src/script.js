window.onload = function() {
  mtpre = document.querySelector("#multitracks pre")
  // for letters a to z (character codes, retrieved in L8:34)
  try {
    for (var i = 65; i <= 90; i++) {
      var mttxt = document.createElement("a")
      mttxt.setAttribute("href", "https://multitrackdownloads.blogspot.com/2012/03/multitracks-" + String.fromCharCode(i).toLowerCase() + ".html")
      mtpre.innerHTML += " - "
      mttxt.innerText = "LETRA " + String.fromCharCode(i)
      mtpre.appendChild(mttxt)
      mtpre.innerHTML += "\n"
    }
  } catch(e) {
    console.log(e)
  }

    // #region details - closes all other <details> when one is opened
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
    // #endregion

    // add [ ] at the start/end of links (lambda x: "[" + x + "]")
    document.querySelectorAll("a:not(.grid a)").forEach(el => el.textContent = "[" + el.textContent + "]")
    document.querySelectorAll("a:not(.grid a)").forEach(el => el.setAttribute("target", "_blank"))

    // retrieve text from all disabled (locked) <details> summary texts
    var arraytxt = []
    var arrayorg = []
    document.querySelectorAll("details[disabled] summary").forEach(el => arraytxt.push(el))
    document.querySelectorAll("details[disabled] summary").forEach(el => arrayorg.push(el.innerText))
    // set text of all disabled/locked <details> to str
    arraytxt.forEach(txt => txt.innerText = "[bloqueado]")
    
    // https://stackoverflow.com/a/2664055
    function getStyle(el, styleProp) {
      var value, defaultView = (el.ownerDocument || document).defaultView;
      // W3C standard way:
      if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
      } else if (el.currentStyle) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
          return letter.toUpperCase();
        });
        value = el.currentStyle[styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
          return (function(value) {
            var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
            el.runtimeStyle.left = el.currentStyle.left;
            el.style.left = value || 0;
            value = el.style.pixelLeft + "px";
            el.style.left = oldLeft;
            el.runtimeStyle.left = oldRsLeft;
            return value;
          })(value);
        }
        return value;
      }
    }

    // check if password matches
    check = function(val) {
      if (val.value == "tSHUTUP" || val.value == "SHUTUP") {
          //val.remove();
          document.querySelectorAll("details[disabled='']").forEach(el => el.removeAttribute("disabled"))
          document.querySelectorAll(".wrapper").forEach(el => el.removeAttribute("class"))
          arraytxt.forEach(function (txt, i) { txt.innerText = arrayorg[i] })
          document.querySelector("#pass").setAttribute("disabled", "")
      }
    }

    // check checkbox status to enable/disable fancy style
    /*
    checkbox = function(elem) {
      if (elem.checked) {
        document.querySelector("#style2").removeAttribute("disabled")
        document.querySelector(".content--canvas").removeAttribute("disabled")
      } else if (!elem.checked) {
        document.querySelector("#style2").setAttribute("disabled", "")
        document.querySelector(".content--canvas").setAttribute("disabled", "")
      }
    }
    */
    // run check when the page starts because the checkbox
    //   is checked by default and elements are disabled
    //   by default, so this fixes that
    //checkbox(document.querySelector("#fancy-checkbox"))

    /*
    document.onkeyup = function(e) {
    var input = document.getElementById('pass');
      if (getStyle(input, "opacity") == 0) {
          //input.value += String.fromCharCode(e.keyCode || e.which);
          input.value += e.key || e.code
	        check(document.querySelectorAll("input")[0])
      }
    };
    */

    /* -> not useful
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
