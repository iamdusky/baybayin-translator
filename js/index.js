// Auto-focus input on load
window.onload = function () {
  document.getElementById("tagalogTextArea").focus();
};

// Toast notification
function showTooltip() {
  let toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 2100);
}

function clearText() {
  document.getElementById("tagalogTextArea").value = "";
  let output = document.getElementById("outputDisplay");
  output.textContent = "Your name will appear here";
  output.classList.add("placeholder");
  output.classList.remove("fade-in");
  document.getElementById("tagalogTextArea").focus();
}

function copyText() {
  let output = document.getElementById("outputDisplay");
  if (output.classList.contains("placeholder")) return;
  navigator.clipboard.writeText(output.textContent).then(function () {
    showTooltip();
  });
}

function convertText() {
  let output = document.getElementById("outputDisplay");
  let input = document.getElementById("tagalogTextArea").value;

  if (input.trim() === "") {
    output.textContent = "Your name will appear here";
    output.classList.add("placeholder");
    output.classList.remove("fade-in");
    return;
  }

  output.classList.remove("placeholder");
  output.style.fontSize = "";
  output.textContent = baybayinTranslate();
  scaleToFit(output);

  // Trigger fade-in animation
  output.classList.remove("fade-in");
  void output.offsetWidth; // force reflow
  output.classList.add("fade-in");
}

function scaleToFit(el) {
  let size = parseFloat(getComputedStyle(el).fontSize);
  while (el.scrollWidth > el.clientWidth && size > 32) {
    size -= 4;
    el.style.fontSize = size + "px";
  }
}

function baybayinTranslate() {
  let rawText = document.getElementById("tagalogTextArea").value.toLowerCase();
  rawText = rawText.replace(/\./g, "//");
  rawText = rawText.replace(/,/g, "/");
  rawText = rawText.replace(/f/g, "p");
  rawText = rawText.replace(/j/g, "diy");
  rawText = rawText.replace(/q/g, "k");
  rawText = rawText.replace(/v/g, "b");
  rawText = rawText.replace(/x/g, "h");
  rawText = rawText.replace(/z/g, "s");
  rawText = rawText.replace(/c/g, "k");
  rawText = rawText.replace(/c(?=[^ie])/g, "k");
  rawText = rawText.replace(/ci/g, "si");
  rawText = rawText.replace(/ce/g, "se");
  rawText = rawText.replace(/cei/g, "si");
  rawText = rawText.replace(/ch/g, "c" + "h");
  rawText = rawText.replace(/sh/g, "siy");
  rawText = rawText.replace(/sh(?=\s|$)/g, "s"); // At the end of a word

  rawText = rawText.replace(/e/g, "i");
  rawText = rawText.replace(/o/g, "u");

  rawText = rawText.replace(/nang/g, "\u1708\u1705\u1714");
  rawText = rawText.replace(/ning/g, "\u1708\u1712\u1705\u1714");
  rawText = rawText.replace(/neng/g, "\u1708\u1712\u1705\u1714");
  rawText = rawText.replace(/nong/g, "\u1708\u1713\u1705\u1714");
  rawText = rawText.replace(/nung/g, "\u1708\u1713\u1705\u1714");

  rawText = rawText.replace(/nga/g, "\u1705");
  rawText = rawText.replace(/ngi/g, "\u1705\u1712");
  rawText = rawText.replace(/ngu/g, "\u1705\u1713");
  rawText = rawText.replace(/ng/g, "\u1705\u1714");

  rawText = rawText.replace(/ka/g, "\u1703");
  rawText = rawText.replace(/ga/g, "\u1704");
  rawText = rawText.replace(/ta/g, "\u1706");
  rawText = rawText.replace(/da/g, "\u1707");
  rawText = rawText.replace(/na/g, "\u1708");
  rawText = rawText.replace(/pa/g, "\u1709");
  rawText = rawText.replace(/ba/g, "\u170A");
  rawText = rawText.replace(/ma/g, "\u170B");
  rawText = rawText.replace(/ya/g, "\u170C");
  rawText = rawText.replace(/ra/g, "\u1707");
  rawText = rawText.replace(/la/g, "\u170E");
  rawText = rawText.replace(/wa/g, "\u170F");
  rawText = rawText.replace(/sa/g, "\u1710");
  rawText = rawText.replace(/ha/g, "\u1711");

  rawText = rawText.replace(/ki/g, "\u1703\u1712");
  rawText = rawText.replace(/gi/g, "\u1704\u1712");
  rawText = rawText.replace(/ti/g, "\u1706\u1712");
  rawText = rawText.replace(/di/g, "\u1707\u1712");
  rawText = rawText.replace(/ni/g, "\u1708\u1712");
  rawText = rawText.replace(/pi/g, "\u1709\u1712");
  rawText = rawText.replace(/bi/g, "\u170A\u1712");
  rawText = rawText.replace(/mi/g, "\u170B\u1712");
  rawText = rawText.replace(/yi/g, "\u170C\u1712");
  rawText = rawText.replace(/ri/g, "\u1707\u1712");
  rawText = rawText.replace(/li/g, "\u170E\u1712");
  rawText = rawText.replace(/wi/g, "\u170F\u1712");
  rawText = rawText.replace(/si/g, "\u1710\u1712");
  rawText = rawText.replace(/hi/g, "\u1711\u1712");

  rawText = rawText.replace(/ku/g, "\u1703\u1713");
  rawText = rawText.replace(/gu/g, "\u1704\u1713");
  rawText = rawText.replace(/tu/g, "\u1706\u1713");
  rawText = rawText.replace(/du/g, "\u1707\u1713");
  rawText = rawText.replace(/nu/g, "\u1708\u1713");
  rawText = rawText.replace(/pu/g, "\u1709\u1713");
  rawText = rawText.replace(/bu/g, "\u170A\u1713");
  rawText = rawText.replace(/mu/g, "\u170B\u1713");
  rawText = rawText.replace(/yu/g, "\u170C\u1713");
  rawText = rawText.replace(/ru/g, "\u1707\u1713");
  rawText = rawText.replace(/lu/g, "\u170E\u1713");
  rawText = rawText.replace(/wu/g, "\u170F\u1713");
  rawText = rawText.replace(/su/g, "\u1710\u1713");
  rawText = rawText.replace(/hu/g, "\u1711\u1713");

  rawText = rawText.replace(/a/g, "\u1700");
  rawText = rawText.replace(/i/g, "\u1701");
  rawText = rawText.replace(/u/g, "\u1702");

  rawText = rawText.replace(/k/g, "\u1703\u1714");
  rawText = rawText.replace(/g/g, "\u1704\u1714");
  rawText = rawText.replace(/t/g, "\u1706\u1714");
  rawText = rawText.replace(/d/g, "\u1707\u1714");
  rawText = rawText.replace(/n/g, "\u1708\u1714");
  rawText = rawText.replace(/p/g, "\u1709\u1714");
  rawText = rawText.replace(/b/g, "\u170A\u1714");
  rawText = rawText.replace(/m/g, "\u170B\u1714");
  rawText = rawText.replace(/y/g, "\u170C\u1714");
  rawText = rawText.replace(/r/g, "\u1707\u1714");
  rawText = rawText.replace(/l/g, "\u170E\u1714");
  rawText = rawText.replace(/w/g, "\u170F\u1714");
  rawText = rawText.replace(/s/g, "\u1710\u1714");
  rawText = rawText.replace(/h/g, "\u1711\u1714");

  return rawText;
}
