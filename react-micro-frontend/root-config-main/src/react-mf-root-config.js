import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";
// import Publisher from './Publisher.js';
// import {initPublisher} from './lib/initPublisher.js';

// window.Publisher = new Publisher();

// const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
//   loaders: {
//     topNav: "<h1>Loading topnav</h1>",
//   },
//   errors: {
//     topNav: "<h1>Failed to load topnav</h1>",
//   },
// });
// console.log('react-mf-root-config', routes);
// const applications = constructApplications({
//   routes,
//   loadApp: ({ name }) => System.import(name),
// });
// // Delay starting the layout engine until the styleguide CSS is loaded
// const layoutEngine = constructLayoutEngine({
//   routes,
//   applications,
//   active: false,
// });

// applications.forEach(registerApplication);

// console.log('config');
// registerApplication(
//   // Name of our single-spa application
//   initPublisher('home'),
//   // Our loading function
//   () => {
//     return window.System.import('@react-mf/navbar')
//   },
//   // Our activity function
//   () => location.pathname.startsWith('/home')
// );

// System.import("@react-mf/styleguide").then(() => {
//   // Activate the layout engine once the styleguide CSS is loaded
//   layoutEngine.activate();
//   start();
//   console.log('styleguide');
// });

import * as isActive from "./activity-functions";

registerApplication({
  name: "@react-mf/navbar",
  app: () => System.import("@react-mf/navbar"),
  activeWhen: isActive.navbar,
});

registerApplication({
  name: "@react-mf/people",
  app: () => System.import("@react-mf/people"),
  activeWhen: isActive.people,
});

registerApplication({
  name: "@react-mf/planets",
  app: () => System.import("@react-mf/planets"),
  activeWhen: isActive.planets,
});

registerApplication({
  name: "@react-mf/cars",
  app: () => System.import("@react-mf/cars"),
  activeWhen: isActive.cars,
});

start();


