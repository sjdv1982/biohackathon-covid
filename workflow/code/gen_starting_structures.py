import numpy as np

header="""#pivot auto
#centered receptor: false
#centered ligands: false
"""

template = ("0           0           0           0           0           0\n"
           "{:.3f}           {:.3f}           {:.3f}          {:.3f}    {:.3f}   {:.3f}\n")

np.random.seed(seed)

result = header
for i in range(nstruc):
    result += "#{}\n".format(i+1)
    rot_x, rot_y, rot_z = np.random.uniform(0, 2*np.math.pi, 3)
    result += template.format(rot_x, rot_y, rot_z, offset["x"], offset["y"], offset["z"])
