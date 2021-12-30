# ExportReader
# Author: J. Mitchell
# Plotting code for electric vector fields

# References
# http://michal.rawlik.pl/2015/03/12/magnetic-dipole-in-python/
# http://scipython.com/blog/visualizing-a-vector-field-with-matplotlib/

#### Pre-Amble ####
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Circle

#### Input ####
Order = 3

#### Define equation ####
def E(q, r0, x, y):
    den = ((x-r0[0])**2 + (y-r0[1])**2)**1.5
    return q * (x - r0[0]) / den, q * (y - r0[1]) / den

#### (X, Y) grid ####
nx, ny = 256, 256
x = np.linspace(-2, 2, nx)
y = np.linspace(-2, 2, ny)
X, Y = np.meshgrid(x, y)

#### Charges ####
nq = 2*Order
charges = []
for i in range(nq):
    q = i%2 * 2 - 1
    charges.append((q, (np.cos(2*np.pi*i/nq), np.sin(2*np.pi*i/nq))))

#### Seperate components ####
Ex, Ey = np.zeros((ny, nx)), np.zeros((ny, nx))
for charge in charges:
    ex, ey = E(*charge, x=X, y=Y)
    Ex += ex
    Ey += ey

fig = plt.figure()
ax = fig.add_subplot(111)

#### Vector plot ####
color = np.log(np.sqrt(Ex**2 + Ey**2))
ax.streamplot(x, y, Ex, Ey, color=color, linewidth=1, cmap=plt.cm.gnuplot, density=2, arrowstyle='->', arrowsize=1.0)

##### Add point charges ####
charge_colors = {True: '#aa0000', False: '#0000aa'}
for q, pos in charges:
    ax.add_artist(Circle(pos, 0.05, color=charge_colors[q>0]))

#### Plot properties ####
ax.set_xlabel('x [arb.units]')
ax.set_ylabel('y [arb.units]')
ax.set_xlim(-2,2)
ax.set_ylim(-2,2)
ax.set_aspect('equal')
plt.show()