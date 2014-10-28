cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.chariotsolutions.nfc.plugin/www/phonegap-nfc.js",
        "id": "com.chariotsolutions.nfc.plugin.NFC",
        "runs": true
    },
    {
        "file": "plugins/com.chariotsolutions.toast.plugin/www/phonegap-toast.js",
        "id": "com.chariotsolutions.toast.plugin.Toasty",
        "clobbers": [
            "toast"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.chariotsolutions.nfc.plugin": "0.5.1",
    "com.chariotsolutions.toast.plugin": "1.1.1"
}
// BOTTOM OF METADATA
});