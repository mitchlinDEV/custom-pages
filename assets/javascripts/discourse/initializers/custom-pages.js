import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "custom-pages",

  initialize() {
    withPluginApi("0.12.1", (api) => {
      // Route: /unhoard-info
      api.addRoute("unhoard-info", {
        path: "/unhoard-info",

        render() {
          // Use the template named "unhoard-info"
          this.render("unhoard-info");
        },
      });
    });
  },
};
