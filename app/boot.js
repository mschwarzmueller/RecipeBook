System.register(['angular2/platform/browser', "./app.component", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            //noinspection TypeScriptValidateTypes
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLHNDQUFzQztZQUN0QyxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbi8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbUk9VVEVSX1BST1ZJREVSU10pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
