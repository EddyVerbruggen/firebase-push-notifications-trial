const HomeViewModel = require("./home-view-model");
// const SocialShare = require("nativescript-social-share");
const firebase = require("nativescript-plugin-firebase");

function onLoaded(args) {
    const component = args.object;
    component.bindingContext = new HomeViewModel();

    // SocialShare.shareText("I love NativeScript!");

    firebase.init({
        // Optionally pass in properties for database, authentication and cloud messaging,
        // see their respective docs.
        onMessageReceivedCallback: function (message) {
            console.log("Title: " + message.title);
            console.log("Body: " + message.body);
            // if your server passed a custom property called 'foo', then do this:
            console.log("Value of 'foo': " + message.data.foo);
            alert("Notification!!");
        },
        onPushTokenReceivedCallback: function (token) {
            console.log("Firebase push token: " + token);
        }
    }).then(function (instance) {
        console.log("firebase.init done");
    },
        function (error) {
            console.log("firebase.init error: " + error);
        }
        );

}

exports.onLoaded = onLoaded;
