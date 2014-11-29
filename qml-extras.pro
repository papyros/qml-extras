TEMPLATE = subdirs
SUBDIRS += tests

deployment.files += modules/Material/Extras

deployment.path = $$[QT_INSTALL_QML]/Material
INSTALLS += deployment
