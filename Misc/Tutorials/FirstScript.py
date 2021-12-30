#### FirstScript ####

## Package Install ##
import matplotlib.pyplot as plt
import numpy as np

## Commands ##
plt.close("all")

## Script ##

## Make some variables

# Make a 'list' of ascending numbers from 0
x = range(100)
# Turn this 'list' into a numpy array
x = np.array(x)
# Do the same for y but in one step
y = np.array(range(100))
# Manually make an array
y2 = np.array([3, 5, 11, 9, 9, 3, 15, 7, 3, 3])

## Do some maths

# Make 'x' into an array of floats
x = x*1.0
x = x/10
y = 5*np.cos(x)
y2 = 5*np.sin(x + 0.6)
y3 = 3*np.sin(3*x)

# Make a plot
plt.figure(figsize=(7,5))
plt.plot(x, y, 'rs-', ms=7)
plt.plot(x, y2, 'bs-', ms=7)
plt.plot(x, y3, 'gs-', ms=7)
plt.title('Example Plot')
plt.xlabel('xData')
plt.ylabel('yData')
plt.grid()


