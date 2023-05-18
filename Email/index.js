export const Email = (props) => {
  const { id, senderName, subject, time, unread, body = "test" } = props;
  let iconClass = "opened";
  if (unread) {
    iconClass = "closed";
  }

  const emailElm = document.createElement("div");
  emailElm.classList.add("email");
  if (body) {
    emailElm.classList.add("email--expand");
  }
  emailElm.innerHTML = `
        <div class="email__head">
              <button class="email__icon email__icon--${iconClass}"></button>
              <div class="email__info">
                <div class="email__sender">${senderName}</div>
                <div class="email__subject">${subject}</div>
              </div>
              <div class="email__time">${time}</div>
            </div>
            <div class="email__body">${body}</div>
        `;

  // const emailBody = emailElm.querySelector(".email__body");

  // fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails/${id}`)
  //   .then((response) => response.json())
  //   .then((data) => emailSection(data.emails));

  return emailElm;
};
