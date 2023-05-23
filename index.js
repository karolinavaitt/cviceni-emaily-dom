import { EmailSection } from "./EmailSection/index.js";

const app = document.querySelector("#app");
// app.append(
//   EmailSection({
//     heading: "Nepřečtené",
//     emails: [],
//     folder: "unread",
//   }),
//   EmailSection({ heading: "Přečtené", emails: [], folder: "read" })
// );

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
  .then((response) => response.json())
  .then((data) => {
    app.append(
      EmailSection({
        heading: "Nepřečtené",
        emails: data.emails,
        folder: "unread",
      })
    );
  });

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
  .then((response) => response.json())
  .then((data) => {
    app.append(
      EmailSection({
        heading: "Přečtené",
        emails: data.emails,
        folder: "unread",
      })
    );
  });
