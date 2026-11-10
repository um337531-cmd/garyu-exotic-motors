window.formspree =
  window.formspree ||
  function () {
    (window.formspree.q = window.formspree.q || []).push(arguments);
  };
window.formspree("initForm", {
  formElement: "#contact-form",
  formId: "xyekogqd",
  onSuccess: function () {
    window.location.href = "thanks.html";
  },
});
