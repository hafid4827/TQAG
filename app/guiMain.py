import selenium

import eel
eel.init('web')
""" iria la logica """


@eel.expose
def temporal(rut):
    print(rut)



eel.start('main.html', size=(400, 800))