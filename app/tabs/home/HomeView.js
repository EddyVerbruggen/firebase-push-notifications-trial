const HomeViewModel = require("./home-view-model");
const SocialShare = require("nativescript-social-share");
const firebase = require("nativescript-plugin-firebase");

function onLoaded(args) {
    const component = args.object;
    component.bindingContext = new HomeViewModel();

    // SocialShare.shareText("I love NativeScript!");

}

function initFirebase(params) {
    setTimeout(() => {
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
        }).then(function (instance) {
                console.log("firebase.init done");
            },
            function (error) {
                console.log("firebase.init error: " + error);
            }
        );
    }, 3000);
}


exports.initFirebase = initFirebase;
exports.onLoaded = onLoaded;
