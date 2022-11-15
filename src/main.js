import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { router } from "./router/router";
import { loadFonts } from "./plugins/webfontloader";
// global components
import delay from "./components/single-components/delay.vue";
import waitLinear from "./components/single-components/loading/waitLinear.vue";
import { regComponents } from "./plugins/components";
// ----------------------------------------------------------
loadFonts();
const pinia = createPinia();
// <<<< ------ adding store to Pinia
function myFirstPlugin() {
    return { secret: "My secret Data, added by plugin" };
}

function secondPluginData(context) {
    console.log("contextPinia:", context.pinia);
    console.log("contextApp:", context.app);
    console.log("contextStore:", context.store);
    console.log("contextOption:", context.option);
    return { secretData: "My secret data Nuber TWO!!!" };
}
// adding store with directly
pinia.use(({ store }) => {
    if (process.env.NODE_ENV === "development") {
        //LOOK BACK !!! (ambigious)
        // add any keys you set on the store
        store._customProperties.add("hello");
    }
    return (store.greeting = "Hello World from Plugin");
});
// adding plugin to Pinia >>>>----------
pinia.use(myFirstPlugin);
pinia.use(secondPluginData);

createApp(App)
    .use(vuetify)
    .use(pinia)
    .use(router)
    .use(regComponents, {
        delay: delay,
        "wait-linear": waitLinear,
    })
    .mount("#app");

// NOTE !
// app.config.globalProperties.myName = "Anvar";
// app.config.globalProperties.lastName = "Buranov";
/*         ACCESS BY:
const {appContext} = getCurrentInstance();
console.log(appContext.config.globalProperties)
 */

console.log(import.meta.env.PROD)
