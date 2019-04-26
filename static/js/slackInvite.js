function slackInvite(email) {
  var data = JSON.stringify({
    "email": email
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://api.freo.dev/slack/invite");
  xhr.setRequestHeader("content-type", "application/json");

  xhr.send(data);
}
