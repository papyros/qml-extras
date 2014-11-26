/***************************************************************************
 * Whatsoever ye do in word or deed, do all in the name of the             *
 * Lord Jesus, giving thanks to God and the Father by him.                 *
 * - Colossians 3:17                                                       *
 *                                                                         *
 * Ubuntu UI Extras - A collection of QML widgets not available            *
 *                    in the default Ubuntu UI Toolkit                     *
 *
 * Copyright (C) 2014 Michael Spencer
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, either version 2.1 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import QtQuick 2.0
import "listutils.js" as List

Object {
    id: document

    property var data: {
        return {}
    }

    property int version: 1

    function set(name, value) {
        data[name] = value
        data = data //TODO: Is there a better way?
    }

    function sync(name, value) {
        data[name] = value
        data = data //TODO: Is there a better way?
        return Qt.binding(function() { return get(name, value) })
    }

    function get(name, def) {
        if (data.hasOwnProperty(name)) {
            return data[name]
        } else {
            return def
        }
    }

    signal upgrade(var version)
    signal save()
    signal loaded()

    function fromJSON(json) {
        if (!json)
            return
        data = JSON.parse(JSON.stringify(json))
        if (data.version < document.version) {
            upgrade(data.version)
        } else if (data.version > document.version) {
            throw "Stored version is higher than the supported version: " + data.version + " > " + document.version
        }
        loaded()
    }

    function toJSON() {
        save()
        var json = JSON.parse(JSON.stringify(data))
        json.version = document.version
        return json
    }
}
