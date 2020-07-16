# Assume that chain A is the protein
awk 'substr($0,22,1) == "A"' pdb > pdb_chainA
python $ATTRACTTOOLS/../allatom/aareduce.py pdb_chainA RESULT --pdb2pqr --heavy
