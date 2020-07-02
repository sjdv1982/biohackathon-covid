$ATTRACTDIR/attract $ATTRACTDIR/../structure-single.dat $ATTRACTDIR/../attract.par protein rna --score --rest restraints | grep Energy | awk '{print $2}' > RESULT
$ATTRACTDIR/attract  $ATTRACTDIR/../structure-single.dat $ATTRACTDIR/../attract.par protein rna --vmax 50 --only-rot --rest restraints --ghost > stage1.dat
$ATTRACTDIR/fix_receptor stage1.dat 2 | python $ATTRACTTOOLS/fill.py /dev/stdin stage1.dat > stage1.dat-fixre
$ATTRACTDIR/attract $ATTRACTDIR/../structure-single.dat $ATTRACTDIR/../attract.par protein rna --rest restraints | grep Energy | awk '{print $3}' > RESULT
