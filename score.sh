$ATTRACTDIR/attract $ATTRACTDIR/../structure-single.dat $ATTRACTDIR/../attract.par protein rna --score | grep Energy | awk '{print $2}' > RESULT
