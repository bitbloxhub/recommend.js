/*recommendrender.mjs*/

export default function (reobj,id, limit = 20 , use_powered_by_header = true) {
  var to_elem = document.querySelector(`#${id}`);
  var recommendations = reobj.Recomend(limit);
  if (use_powered_by_header) {
    to_elem.innerHTML += `<p>recommendations powered by bitbloxhub\`s <b>recomend.js</b></p>\n`;
  };
  to_elem.innerHTML += `<div class="recrender_renderbox">`;
  recommendations.forEach((item, i) => {
    to_elem.innerHTML += `<span class="recrender_card"><a href="${item["link"]}">${item["name"]}</a></span>`;
  });
  to_elem.innerHTML += `</div>`
};
