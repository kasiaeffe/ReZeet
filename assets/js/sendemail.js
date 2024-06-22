let form = $("#signup_form");
let btn = $("#signup-btn");

let msg = {
  show: function (text) {
    $("body").find("#msg").show().text(text);
  },
  hide: function () {
    $("body").find("#msg").hide().text("");
  },
};

(function () {
  emailjs.init({
    publicKey: "wUub1jjUxYqejM_VN",
  });
})();

function SendEmail(fullname, email, country) {
  emailjs
    .send("service_3vq1ir4", "template_56qin1q", {
      fullname: fullname,
      email: email,
      country: country,
    })
    .then(
      (response) => {
        form.submit();
      },
      (error) => {
        btn.removeAttr("disabled");
        msg.show("FAILED...", error);
      }
    );
}

btn.click(function (event) {
  let fullname = form.find("#fullname").val();
  let email = form.find("#email").val();
  let country = form.find("#country").val();

  if (fullname == "" || country == "" || email == "") {
    msg.show("Fill all fields");
  } else {
    btn.attr("disabled", "disabled");
    btn.text("Loading...");
    SendEmail(fullname, email, country);
  }
});
