const BASE_URL = 'https://api.github.com/users/beahoop';

console.log('hi');
fetch(`${BASE_URL}`
  // , {
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`
  //   }
  // }
)
  .then(response => response.json())
  .then(data => console.log(data));
////////////////////////////////////////USER INFO
const generateUser = (data) => {
  const source = document.getElementById("user-photo").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.querySelector(".user").innerHTML = html;
}
fetch(`${BASE_URL}`)
  .then(response => response.json())
  .then(data => generateUser(data));
////////////////////////////////////////ORGS INFO
const generateOrgs = (data) => {
  const source = document.getElementById("orgs").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.querySelector(".orgs").innerHTML = html;
}
fetch(`${BASE_URL}/orgs`)
  .then(response => response.json())
  .then(data => generateOrgs({orgs:data}));
  // .then(data => console.log({orgs:data}));
  //by putting {name:array} you have made the array a an object.
////////////////////////////////////////REPOSITORIES

const generateRep = (data) => {
  const source = document.getElementById("repositories").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.querySelector(".repositories").innerHTML = html;
}
fetch(`${BASE_URL}/repos`)
  .then(response => response.json())
  .then(data => generateRep({rep:data}));

// const updated = moment("this.pushed_at", "YYYYMMDD").fromNow();
// document.querySelector(".updated").innerHTML = updated;
fetch(`${BASE_URL}/repos`)
  .then(response =>
    // {
    // fetch()
    //   .then
    //     .then
    response.json()
  // }
)
  .then(data => generateRep({rep:data}));

// one template and two fetch request.

/////////////////////////////////////////////STAR
// fetch(`${BASE_URL}`)
//   .then(response => {
//     fetch(`${BASE_URL}/Star`)
//       .then ()
//         .then ()
//     response.json()}
// )
