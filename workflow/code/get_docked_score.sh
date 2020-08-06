grep Energy datfile | awk '{print $3}' | sort -g | head -n 1 > RESULT
