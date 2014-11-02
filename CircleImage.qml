import QtQuick 2.3
import QtGraphicalEffects 1.0

Item {
    id: item

    property alias source: image.source
    property alias status: image.status

    width: image.implicitWidth
    height: image.implicitHeight

    Image {
        id: image
        anchors.fill: parent
        smooth: true
        visible: false
        mipmap: true
    }

    Image {
        id: mask
        source: Qt.resolvedUrl("circle.png")
        anchors.fill: image
        smooth: true
        visible: false
        mipmap: true
    }

    OpacityMask {
        anchors.fill: image
        source: image
        maskSource: mask
    }
}

