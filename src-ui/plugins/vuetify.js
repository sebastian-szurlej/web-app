/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
// import "vuetify/styles";
import "@/assets/main.scss";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    global: {
      ripple: false,
    },
    VSheet: {
      elevation: 4,
    },
    VList: {
      density: "compact",
    },
    VListItem: {
      height: 25,
      density: "compact",
      minHeight: 25,
    },
  },
});
