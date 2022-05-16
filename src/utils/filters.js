import Vue from "vue";

Vue.filter("formatCurrency", function (value = "_") {
  value = parseInt(value);
  return value.toLocaleString("en", {
    style: "currency",
    currency: "NGN",
  });
});
