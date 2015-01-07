QML Extras
==========

[![Build Status](https://travis-ci.org/papyros/qml-extras.svg)](https://travis-ci.org/papyros/qml-extras)

Extra types and utilities to make QML even more awesome

Developed by Michael Spencer

### Install ###

```
qmake
make check
make install
```

### Example ###

Promise:
```
import QtQuick 2.3
import Quantum.Extras 0.1

Item {
    function makePromise() {
        var myvalue = "";

        var promise = new Promises.Promse();
        promise.info.myinfo = "cool info";
        promise.then = function( data, info ) {
                // send data to the next step
                return info.myinfo + " " + data;
        });

        promise.done = function( data, info ) {
                // do something with the data of resolve(...)
        });

        promise.error = function( error, info ) {
                // do something with the data of reject(...)
        });
    }
}

```


### Licensing ###

QML Extras is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
