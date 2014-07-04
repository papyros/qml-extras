function generateID() {
    var guid = (function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
      }
      return function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
      };
    })()();
    print(guid)
    return guid
}

function findChild(obj,objectName) {
    var childs = new Array(0);
    childs.push(obj)
    while (childs.length > 0) {
        if (childs[0].objectName == objectName) {
            return childs[0]
        }
        for (var i in childs[0].data) {
            childs.push(childs[0].data[i])
        }
        childs.splice(0, 1);
    }
    return null;
}

function escapeHTML(html) {
    return html.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

function cherrypick(list, properties) {

    if (typeof(list) === 'object') {
        var obj = {}
        for (var i = 0; i < properties.length; i++) {
            var prop = properties[i]
            print(prop)
            obj[prop] = list[prop]
        }

        return obj
    } else {
        var result = []

        for (var i = 0; i < list.length; i++) {
            var item = list[i]
            var obj = {}
            for (var i = 0; i < properties.length; i++) {
                var prop = properties[i]
                obj[prop] = item[prop]
            }

            result.push(obj)
        }

        return result
    }
}

function findChild(obj,objectName) {
    var childs = new Array(0);
    childs.push(obj)
    while (childs.length > 0) {
        if (childs[0].objectName == objectName) {
            return childs[0]
        }
        for (var i in childs[0].data) {
            childs.push(childs[0].data[i])
        }
        childs.splice(0, 1);
    }
    return null;
}
