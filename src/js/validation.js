import $ from "jquery";
import validator from "jquery-validation";

$.validator.setDefaults({
  debug: true,
  success: "valid",
});

$(".subscribe-right-form").validate({
  rules: {
    field: {
      required: true,
    },
  },
});
