import { EmailSection } from "./EmailSection/index.js";

const app = document.querySelector("#app");
app.append(
  EmailSection({
    heading: "Nepřečtené",
    emails: [],
    folder: "unread",
  }),
  EmailSection({ heading: "Přečtené", emails: [], folder: "read" })
);

//   const emailSection = emails.map((email) =>
//     Email({
//       senderName: email.sender.name,
//       subject: email.subject,
//       time: email.time,
//       unread: email.unread,
//     })
//   );
//   element.append(...emailSection);
// };
// fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
//   .then((response) => response.json())
//   .then((data) =>
//     renderSection(data.emails, document.getElementById("unread"))
//   );

// fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
//   .then((response) => response.json())
//   .then((data) => renderSection(data.emails, document.getElementById("read")));
