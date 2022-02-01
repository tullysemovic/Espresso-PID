
#!/usr/bin/python
# Copyright (c) 2014 Adafruit Industries
# Author: Tony DiCola
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

# Can enable debug output by uncommenting:
#import logging
#logging.basicConfig(level=logging.DEBUG)

import time
import Adafruit_GPIO.SPI as SPI
import Adafruit_MAX31855.MAX31855 as MAX31855
import RPi.GPIO as GPIO
import signal
from simple_pid import PID

P = 1
I = 0.1
D = 0.05

pid = PID(P, I, D)
pid.sample_time = 0.01
pid.setpoint = 90

# Define a function to convert celsius to fahrenheit.
def c_to_f(c):
        return c * 9.0 / 5.0 + 32.0


# Raspberry Pi software SPI configuration.
CLK = 4
CS  = 3
DO  = 2
sensor = MAX31855.MAX31855(CLK, CS, DO)


GPIO.setup(21, GPIO.OUT)
GPIO.output(21, GPIO.HIGH)


def handler(signum, frame):
    res = input("Ctrl-c was pressed. Do you really want to exit? y/n ")
    if res == 'y':
        GPIO.output(21, GPIO.LOW)
        exit(1)
 
signal.signal(signal.SIGINT, handler)

# Loop printing measurements every second.
print('Press Ctrl-C to quit.')
while True:
    temp = sensor.readTempC()
    internal = sensor.readInternalC()
    print(temp)

    output = pid(temp)
    print("OUTPUT -------------------------");
    print(output);

        #GPIO.output(21, GPIO.HIGH)
        
    time.sleep(0.25)