import QtQuick 2.0
import QtQuick.LocalStorage 2.0

Item {
    property var db
    property var cache
    property string name
    property string description

    signal loaded()
    signal save()

    function open() {
        if (db !== undefined) return

        db = LocalStorage.openDatabaseSync(name, "", description, 100000);

        if (db.version === "") {
            db.changeVersion("", "0.1",
                function(tx) {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS storage(key TEXT UNIQUE, value TEXT)');
                    console.log('Database created');
                });
            // reopen database with new version number
            db = LocalStorage.openDatabaseSync(name, "", description, 100000);
        }

        cache = {}
        db.readTransaction(
            function(tx){
                var rs = tx.executeSql('SELECT key, value FROM storage');
                for(var i = 0; i < rs.rows.length; i++) {
                    var row = rs.rows.item(i);
                    cache[row.key] = row.value;
                }
                //print(JSON.stringify(cache))
                loaded()
            }
        );
    }

    function set(name, value) {
        cache[name] = value
        db.transaction( function(tx){
            tx.executeSql('INSERT OR REPLACE INTO storage VALUES(?, ?)', [name, value]);
        });
    }

    function get(name, def) {
        return cache.hasOwnProperty(name) ? cache[name] : def
    }

    function has(name) {
        return cache.hasOwnProperty(name)
    }

    function clearDB() { // for dev purposes
        open();
        db.transaction(function(tx){
            tx.executeSql('DELETE FROM storage WHERE 1');
        });
    }

    Component.onCompleted: open()
    Component.onDestruction: save()
}
