/*recommend.js*/

// articles is array of things with the "name","link", and "arttypes" attrs
export default function RecommenderSystem(articles) {
  this.visited = {`__IGNOREME` : 0}; // __IGNOREME is for Recommend if we dont have any visited yet
  this.articles = articles;

  this.Visit = function (topic) {
    this.visited[topic] = (((visited?.[topic]) ?? 0) + 1);
  };

  this.Recommend = function (limit = 20) {
    var mostVisited = Object.keys(obj).reduce((a, b) => this.visited[a] > this.visited[b] ? a : b); // from https://stackoverflow.com/a/27376421
    var articlesMayLike = this.articles.filter((x) => (x[`arttype`].includes(mostVisited)));
    return articles.slice(0, limit);
  };

  this.Render = function (id, limit = 20 , use_powered_by_header = true) {
    var to_elem = document.querySelector(`#${id}`);
    var recommendations = this.Recomend(limit);
    if (use_powered_by_header) {
      to_elem.innerHTML += `<p>recommendations powered by bitbloxhub\`s <b>recomend.js</b></p>\n`;
    };
    to_elem.innerHTML += `<div class="recrender_renderbox">`;
    recommendations.forEach((item, i) => {
      to_elem.innerHTML += `<span class="recrender_card"><a href="${item["link"]}">${item["name"]}</a></span>`;
    });
    to_elem.innerHTML += `</div>`
  };

  /* state does not save articles */

  this.SaveState = function (key) {
    window.localStorage.setItem(`bitbloxhub:recommend.js:${key}`, JSON.stringify(this.visited));
  };

  this.LoadState = function (key) {
    this.visited = JSON.parse(window.localStorage.getItem(`bitbloxhub:recommend.js:${key}`));
  };

};
