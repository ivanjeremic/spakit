//@ts-nocheck
export function useComponent(path: any, tag: any) {
  fetch(path)
    .then(function (response) {
      // When the page is loaded convert it to text
      return response.text();
    })
    .then(function (html) {
      // Initialize the DOM parser
      const parser = new DOMParser();

      // Parse the text
      const doc = parser.parseFromString(html, "text/html");

      // We use querySelector here to have a
      //convention where users need to name the components
      const get = doc.querySelector("body").innerHTML;

      const x = document.querySelector(tag);
      x.innerHTML = get;
    })
    .then(() => {
      var temp = document.getElementById("temp");
      var clon = temp.content.cloneNode(true);
      document.body.appendChild(clon);
    })
    .catch(function (err) {
      console.log("Failed to import and use component ", err);
    });
}
