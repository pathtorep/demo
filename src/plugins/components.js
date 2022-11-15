export const regComponents = {
   install: (app, option) => {
      for (let key in option) {
         app.component(key, option[key]);
      }
   },
};

export const regDirectives = {
   install: (app, option) => {
      for (let key in option) {
         app.directive(key, option[key]);
      }
   },
};
