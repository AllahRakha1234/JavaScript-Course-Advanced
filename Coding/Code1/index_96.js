// ------------------------ *** FROM 96th Video *** ----------------------------------

// *** NPM AND NODE.JS PACKAGES *** (NPM is a package manager for the node.js) (It is used to install the packages, manage the packages, etc.) (It is used to install the packages globally or locally)(NPM packages are stored in the node_modules folder)

// npm init -y ::: (It will initialize the node project) (It is used to create the package.json file) (It is used to create the package.json file with default values)
// npm install ::: (It is used to install the packages) (** If we have a project and when we execute npm install, it will check the packages name in the package.json file and will install all those packages. **) (It is used to install the packages locally) (It is used to install the packages in the node_modules folder)

var pdf = require("pdf-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");

var options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "45mm",
    contents: '<div style="text-align: center;">Author: Shyam Hajare</div>',
  },
  footer: {
    height: "28mm",
    contents: {
      first: "Cover page",
      2: "Second page", // Any page number is working. 1-based index
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: "Last Page",
    },
  },
};

var users = [
  {
    name: "tom",
    age: "21",
  },
  {
    name: "dick",
    age: "23",
  },
  {
    name: "harry",
    age: "29",
  },
];
var document = {
  html: html,
  data: {
    users: users,
  },
  path: "./output.pdf",
  type: "pdf",
};

pdf(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
