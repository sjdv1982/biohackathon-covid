template = """#pivot auto
#centered receptor: false
#centered ligands: false
#1
           0           0           0           0           0           0
           0           0           0           {:.3f}    {:.3f}   {:.3f}
"""
result = template.format(offset["x"], offset["y"], offset["z"])