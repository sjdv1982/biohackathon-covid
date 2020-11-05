echo '**************************************************************'
echo 'Generate starting structures...'
echo '**************************************************************'
python2 $ATTRACTTOOLS/randsearch.py 2 $nstruc --fix-receptor > randsearch0.dat

echo '**************************************************************'
echo 'ensemble search:'
echo ' add ensemble conformations to the starting structures'
echo '**************************************************************'

echo '**************************************************************'
echo 'random ensemble conformation in ligand 1 for each starting structure'
echo '**************************************************************'
python2 $ATTRACTTOOLS/ensemblize.py randsearch0.dat $ens1 1 random $seed1 > randsearch-ens1.dat
python2 $ATTRACTTOOLS/ensemblize.py randsearch-ens1.dat $ens2 2 random $seed2 > RESULT
