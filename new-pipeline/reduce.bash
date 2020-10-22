echo '**************************************************************'
echo 'Reduce partner PDBs...'
echo '**************************************************************'
rm -rf temp-ensemble
mkdir temp-ensemble
$ATTRACTTOOLS/splitmodel partnerpdb temp-ensemble/model 2 > /dev/null
python2 $ATTRACTDIR/../allatom/aareduce.py temp-ensemble/model-1.pdb temp-ensemble/model-aa-1.pdb --chain $chain --dumppatch $opts > partner.mapping
python2 $ATTRACTTOOLS/reduce.py temp-ensemble/model-aa-1.pdb temp-ensemble/model-1.pdb --chain $chain > /dev/null
for i in `seq 2 $ensemble_size`; do
  python2 $ATTRACTDIR/../allatom/aareduce.py temp-ensemble/model-${i}.pdb temp-ensemble/model-aa-${i}.pdb --chain $chain --dumppatch --reference temp-ensemble/model-aa-1.pdb $opts > /dev/null
  python2 $ATTRACTTOOLS/reduce.py temp-ensemble/model-aa-${i}.pdb temp-ensemble/model-${i}.pdb --chain $chain $opts2 > /dev/null
done
seq $ensemble_size | awk '{printf("temp-ensemble/model-%d.pdb\n", $1)}' > temp-list
python2 $ATTRACTTOOLS/joinmodel.py `cat temp-list` > partner-r.pdb
seq $ensemble_size | awk '{printf("temp-ensemble/model-aa-%d.pdb\n", $1)}' > temp-list
python2 $ATTRACTTOOLS/joinmodel.py `cat temp-list` > partner-aa.pdb
rm -rf temp-ensemble temp-list
tar --mtime='1970-01-01' -cf RESULT partner-r.pdb partner-aa.pdb partner.mapping
