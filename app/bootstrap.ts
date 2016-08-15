// Not that bootstrap, but rather bootstrap angular in the index.html
import './index';

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'], {
    strictDi: true
  })
})