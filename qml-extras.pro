TEMPLATE = subdirs
SUBDIRS += tests

deployment.files += Material/Extras

deployment.path = $$[QT_INSTALL_QML]/Material
INSTALLS += deployment
