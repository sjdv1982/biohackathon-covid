echo '**************************************************************'
echo 'deploying protein ensembles'
echo '**************************************************************'

rm -rf partner1-ensemble
mkdir partner1-ensemble
$ATTRACTTOOLS/splitmodel partner1-r.pdb partner1-ensemble/model > partner1-ensemble.list
$ATTRACTTOOLS/splitmodel partner1-aa.pdb partner1-ensemble/model-aa > partner1-ensemble-aa.list

rm -rf partner2-ensemble
mkdir partner2-ensemble
$ATTRACTTOOLS/splitmodel partner2-r.pdb partner2-ensemble/model > partner2-ensemble.list
$ATTRACTTOOLS/splitmodel partner2-aa.pdb partner2-ensemble/model-aa > partner2-ensemble-aa.list

echo '**************************************************************'
echo 'calculate receptorgrid grid'
echo '**************************************************************'
awk '{print substr($0,58,2)}' partner2-ensemble/model-1.pdb | sort -nu > receptorgrid.alphabet
$ATTRACTDIR/make-grid-omp partner1-ensemble/model-1.pdb $ATTRACTDIR/../attract.par 10.0 12.0 receptorgrid.grid --alphabet receptorgrid.alphabet

tar --mtime='1970-01-01' -cf RESULT receptorgrid.grid receptorgrid.alphabet
