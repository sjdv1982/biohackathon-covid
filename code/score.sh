##
$ATTRACTDIR/attract $ATTRACTDIR/../structure-single.dat $ATTRACTDIR/../attract.par protein rna --score --rest restraints | grep Energy | awk '{print $2}' > RESULT
