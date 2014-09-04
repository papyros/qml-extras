file(GLOB QML-EXTRAS_QML_JS_FILES *.qml *.js)

# make the files visible in the qtcreator tree
add_custom_target(qml-extras_QMlFiles ALL SOURCES ${QML-EXTRAS_QML_JS_FILES})

install(FILES ${QML-EXTRAS_QML_JS_FILES} DESTINATION ${APP_DIR}/qml-extras)
