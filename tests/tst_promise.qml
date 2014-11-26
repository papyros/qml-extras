import QtQuick 2.3
import QtTest 1.0
import Quantum.Extras 0.1

TestCase {
    name: "PromiseTests"

    function test_createpromise() {
        var promise = new Promises.Promise();
        verify((promise !== undefined), "could not create");
        verify((promise !== null), "could not create");
        promise.info.test1 = "test1";
        compare(promise.info.test1, "test1", "promise populated");
    }

    function test_createpromises() {
        var promise1 = new Promises.Promise();
        var promise2 = new Promises.Promise();

        promise1.info.test = "test1";
        promise2.info.test = "test2"
        compare(promise1.info.test, "test1", "promise valid");
        compare(promise2.info.test, "test2", "promise valid");
    }
}
