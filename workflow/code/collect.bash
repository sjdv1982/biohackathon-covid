python $ATTRACTTOOLS/sort.py datfile > datfile-sorted
$ATTRACTTOOLS/top datfile-sorted 1  > datfile-sorted-top1
$ATTRACTDIR/collect datfile-sorted-top1 /dev/null ligand > RESULT