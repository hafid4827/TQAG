from selenium import webdriver


def DriversInitOptional(options: str = 'firefox') -> object:

    if options.lower() == 'IE':
        objWebDriver: object = webdriver.IE(
            executable_path='./drivers/geckodriver',
            service_log_path='./drivers/outputlog/geckodriver.log'
        )
    elif options.lower() == 'chrome':
        objWebDriver: object = webdriver.Chrome(
            executable_path='./drivers/geckodriver',
            service_log_path='./drivers/outputlog/geckodriver.log'
        )
    else:
        objWebDriver: object = webdriver.Firefox(
            executable_path='./drivers/geckodriver',
            service_log_path='./drivers/outputlog/geckodriver.log'
        )
    return objWebDriver


def DriversConfigDisplay(XY: tuple = (720, 480), fullscreem: bool = False):
    X = XY[0]
    Y = XY[1]
    driver = DriversInitOptional()
    if fullscreem:
        driver.maximize_window()
    else:
        driver.set_window_size(X, Y)
