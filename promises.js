/*
 * QML Extras - Extra types and utilities to make QML even more awesome
 * Copyright (C) 2014 Michael Spencer
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var Promise = function (delayed) {
    this.thenHandlers = []
    this.onDone = []
    this.onError = []
    this.info = {}

    if (delayed !== undefined)
        this.code = delayed
};

Promise.prototype.then = function (handler) {
    this.thenHandlers.push(handler)
    return this
}

Promise.prototype.done = function (onResolved) {
    this.onDone.push(onResolved)
    return this
};

Promise.prototype.error = function (onError) {
    this.onError.push(onError)
    return this
};

Promise.prototype.resolve = function (value) {
    //print("Success")
    for (var i = 0; i < this.thenHandlers.length; i++) {
        var handler = this.thenHandlers[i]
        value = handler(value, this.info)
    }

    for (var i = 0; i < this.onDone.length; i++) {
        var handler = this.onDone[i]
        handler(value, this.info)
    }
};

Promise.prototype.reject = function (error) {
    //print("Failure", error)
    for (var i = 0; i < this.onError.length; i++) {
        var handler = this.onError[i]
        handler(error, this.info)
    }
};

Promise.prototype.start = function(args) {
    this.code(args)
}
