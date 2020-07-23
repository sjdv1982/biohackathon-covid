# replaces ACTIVE_RESIDUES with active_residues

for rep in representation:
    for k,v in rep.items():
        if v == "ACTIVE_RESIDUES":
            rep[k] = active_residues.strip("\n").replace("\n", ", ")

result = representation
