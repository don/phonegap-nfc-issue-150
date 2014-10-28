var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        nfc.addNdefListener(app.onNfc);

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    onNfc: function(nfcEvent) {
        var message = [
            ndef.textRecord("This is a test of phonegap-nfc Issue #150")
        ];

        nfc.write(
            message,
            function() {
                toast.showShort("Wrote Message to Tag");
            },
            function(reason) {
                alert("Write failed " + reason);
            }
        )
    }
 };

app.initialize();