TEMPLATE = subdirs
SUBDIRS += tests

deployment.files += Quantum/Extras

deployment.path = $$[QT_INSTALL_QML]/Quantum
INSTALLS += deployment
