"use strict";
var router_1 = require('@angular/router');
var header_component_1 = require('./header/header.component');
var navigation_component_1 = require('./navigation/navigation.component');
Const;
app_routes: Routes = [
    { path: '', pathMarch: 'full', redirectTo: '/header' },
    { path: 'header-component', component: header_component_1.HeaderComponent },
    { path: 'navigation-component', component: navigation_component_1.NavigationComponent }
];
exports.app_routing = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routing.js.map