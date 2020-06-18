$ATTRACTDIR/attract $ATTRACTDIR/../structure-single.dat $ATTRACTDIR/../attract.par protein rna | grep Energy | awk '{print $3}' > RESULT
