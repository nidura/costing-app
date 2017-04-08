(function () {
    //index module
    angular.module("indexModule", [
        "ngRoute",
        "ngCookies",
        "ui.bootstrap",
        "viewModule",
        "loginModule",
        "adminModule",
        "tierModule",
        "embellishmentModule",
        "styleModule"
    ]);

     //constants
    angular.module("indexModule")
            .constant("systemConfig", {
                apiUrl:
                        location.hostname === 'localhost'
                        ? "http://localhost:8080"
                        : location.protocol + "//" + location.hostname
            });

    //route config
    angular.module("indexModule")
            .config(function ($routeProvider) {
                $routeProvider
                        //user
                        .when("/", {
                            templateUrl: "app/user/login/login.html",
                            controller: "loginController"
                        })
                        .when("/view-1", {
                            templateUrl: "app/user/view/view1.html",
                            controller: "viewController"
                        })
                        .when("/liner-cost", {
                            templateUrl: "app/user/view/linerCost.html",
                            controller: "viewController"
                        })
                        .when("/cup-cost", {
                            templateUrl: "app/user/view/cupCost.html",
                            controller: "viewController"
                        })
                        .when("/cup-cost2", {
                            templateUrl: "app/user/view/cupCost2.html",
                            controller: "viewController"
                        })
                        .when("/view-2", {
                            templateUrl: "app/user/view/view2.html",
                            controller: "viewController"
                        })
                        .when("/view-3", {
                            templateUrl: "app/user/view/view3.html",
                            controller: "viewController"
                        })
                        .when("/view-4", {
                            templateUrl: "app/user/view/view4.html",
                            controller: "viewController"
                        })
                        .when("/view-5", {
                            templateUrl: "app/user/view/view5.html",
                            controller: "viewController"
                        })
                        .when("/view-6", {
                            templateUrl: "app/user/view/view6.html",
                            controller: "viewController"
                        })
                        .when("/machine-embllishment", {
                            templateUrl: "app/user/view/machineEmbliishment.html",
                            controller: "viewController"
                        })
                        .when("/view-7", {
                            templateUrl: "app/user/view/view7.html",
                            controller: "viewController"
                        })
                        .when("/view-8", {
                            templateUrl: "app/user/view/view8.html",
                            controller: "viewController"
                        })
                        .when("/view-9", {
                            templateUrl: "app/user/view/view9.html",
                            controller: "viewController"
                        })
                        .when("/view-10", {
                            templateUrl: "app/user/view/view10.html",
                            controller: "viewController"
                        })
                        .when("/view-11", {
                            templateUrl: "app/user/view/view11.html",
                            controller: "viewController"
                        })
                        .when("/view-12", {
                            templateUrl: "app/user/view/view12.html",
                            controller: "viewController"
                        })
                        //admin
                        .when("/login-admin", {
                            templateUrl: "app/user/login/admin-login.html"
//                            controller: "loginController"
                        })
                        
                        .when("/admin", {
                            templateUrl: "app/user/admin/style/new-style.html",
                            controller: "styleController"
                        })
                        .when("/admin/styles", {
                            templateUrl: "app/user/admin/style/all-styles.html",
                            controller: "styleController"
                        })
                        .when("/admin/embelleshment", {
                            templateUrl: "app/user/admin/embellishment/embellishment.html",
                            controller: "embellishmentController"
                        })
                        .when("/admin/tiers", {
                            templateUrl: "app/user/admin/tier/tier.html",
                            controller: "tierController"
                        })

                        .otherwise({
                            redirectTo: "/"
                        });
            });
}());

