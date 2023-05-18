import { Email } from "../Email/index.js";

export const EmailSection = (props) => {
  const { heading, emails, folder } = props;

  const element = document.createElement("section");
  element.classList.add("inbox");
  element.innerHTML = `
          <h2>${heading}</h2>
        <div class="emails" id="${folder}">${emails}</div>
     
  `;
  const emailList = element.querySelector(".emails");
  const emailsElm = emails.map((item) => Email(item));
  emailList.append(...emailsElm);

  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`)
    .then((response) => response.json())
    .then((data) =>
      EmailSection({
        heading: heading,
        emails: data.emails,
        folder: folder,
      })
    );

  return element;
};
