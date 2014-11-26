import QtQuick 2.3
import QtTest 1.0
import Quantum.Extras 0.1

TestCase {
    name: "HttpTests"

    function test_getgoogle() {

        var html = "";

        var promise = HttpLib.get("http://www.google.com")
            .then( function(data) {
                html = data;
        });

        wait(2000);
        verify( html !== "", "failed to get url");
    }
}
