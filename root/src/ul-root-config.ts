import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import * as singleSpa from 'single-spa';

singleSpa.addErrorHandler((err) => {
  let appOrParcelName = err.appOrParcelName;
  if (singleSpa.getAppStatus(appOrParcelName) === singleSpa.LOAD_ERROR) {
    System.delete(System.resolve(appOrParcelName));
    let el = document.getElementById('content');

    if (appOrParcelName === '@ul/navbar') {
      el.innerHTML += '<h1>Failed to load navigation</h1>';
    } else {
      el.innerHTML += "<div class='app-loading-error'><h1>Failed to load the requested application</h1></div>";
    }
    document.body.appendChild(el);
  }
});

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
