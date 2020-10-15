# Usage : ./dockProgress.sh tmpXXXX-1 tmpYYYY-1
# Ex.   : ../dockProgress.sh tmp22837-5 tmp50449-5
# tmpxxx-n : Files generated during docking, n beeing the number of processes

echo "\$0" $0
echo "\$1" $1
echo "\$2" "\""$2"\""

if [ ! -f $1 ]
then
	echo "No F1 : "$1
	exit
fi
if [ ! -f $2 ]
then
	echo "No F2 : "$2
	exit
fi

n1=$(cat $1 | tail -30 | fgrep SPLIT | cut -d" " -f3 | tail -1)
n2=$(cat $2 | tail -30 | fgrep SPLIT | cut -d" " -f3 | tail -1)
echo -e "\n"$n1 $n2

# Choose the ref and the file in progress
if [ $n1 -gt $n2 ]
then
	ref=$1
	monitor=$2
else
	ref=$2
    monitor=$1
fi

# refSize
refInit=$(cat $ref | head -8 | fgrep SPLIT | cut -d" " -f3)
refEnd=$(cat $ref | tail -3 | fgrep SPLIT | cut -d" " -f3)

refSize=$(echo "$refEnd - $refInit + 1" | bc)

# monitored
monInit=$(cat $monitor | head -8 | fgrep SPLIT | cut -d" " -f3)
monEnd=$(cat $monitor | tail -30 | fgrep SPLIT | cut -d" " -f3 | tail -1)

monSize=$(echo "$monEnd - $monInit + 1" | bc)

while [ 1 -eq 1 ]
do
	if [[ ! -f $monitor ]]; then exit; fi
	
	monEnd=$(cat $monitor | tail -30 | fgrep SPLIT | cut -d" " -f3 | tail -1)
	monSize=$(echo "$monEnd - $monInit + 1" | bc)
	screenSize=$(tput cols)

	### Number of char to print the progress bar
	numChar=$(echo "scale=10; ( $screenSize.0 - 1 ) / $refSize.0 * $monSize.0" | bc)
	intProgress=$(echo $numChar | cut -d"." -f1)
#	maxRight=$(($screnSize-2-$intProgress))
	### Percentage
	pctChar=$(echo "scale=20; 100.0 / $refSize.0 * $monSize.0" | bc | cut -c-5)
	### Plot the progress bar
#	printf ' %.0s' $(seq -s' ' 1 $maxRight)
#	printf ']\r'
	printf '+%.0s' $(seq -s' ' 1 $intProgress)
#	printf '.%.0s' $(seq -s' ' 1 $maxRight)
	echo -ne "]\r["
	echo -ne "("$pctChar"%)""\r"


	if [ ! -f $1 ]; then exit; fi

	sleep 1
#	echo ""
done
echo ""
