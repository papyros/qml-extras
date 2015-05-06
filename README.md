QML Extras
==========

[![Join the chat at https://gitter.im/papyros/qml-material](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/papyros/qml-material?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![License](https://img.shields.io/badge/license-LGPLv2.1%2B-blue.svg)](http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)
[![GitHub release](https://img.shields.io/github/release/papyros/qml-extras.svg)](https://github.com/papyros/qml-extras)
[![Build Status](https://travis-ci.org/papyros/qml-extras.svg?branch=develop)](https://travis-ci.org/papyros/qml-extras)
[![GitHub issues](https://img.shields.io/github/issues/papyros/qml-extras.svg)](https://github.com/papyros/qml-extras/issues)
[![Bountysource](https://img.shields.io/bountysource/team/papyros/activity.svg)](https://www.bountysource.com/teams/papyros)

Extra types and utilities to make QML even more awesome.

Brought to you by the [Papyros development team](https://github.com/papyros/qml-extras/graphs/contributors).

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
import Material.Extras 0.1

Item {
    function makePromise() {
        var myvalue = "";

        var promise = new Promises.Promse();
        promise.info.myinfo = "cool info";
        promise.then(function( data, info ) {
                // send data to the next step
                return info.myinfo + " " + data;
        });

        promise.done(function( data, info ) {
                // do something with the data of resolve(...)
        });

        promise.error(function( error, info ) {
                // do something with the data of reject(...)
        });
    }
}

```


### Licensing ###

QML Extras is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser Public License as published by the Free Software Foundation; either version 2.1 of the License, or (at your option) any later version.
