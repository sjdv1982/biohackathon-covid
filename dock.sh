$ATTRACTDIR/attract  $ATTRACTDIR/../structure-single.dat $ATTRACTDIR/../attract.par protein rna --vmax 50 --only-rot --rest restraints --ghost > stage1.dat
$ATTRACTDIR/fix_receptor stage1.dat 2 | python $ATTRACTTOOLS/fill.py /dev/stdin stage1.dat > stage1.dat-fixre
$ATTRACTDIR/attract stage1.dat-fixre $ATTRACTDIR/../attract.par protein rna --rest restraints --fix-receptor > RESULT
