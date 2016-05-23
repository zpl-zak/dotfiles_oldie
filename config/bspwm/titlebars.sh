#!/bin/bash
# use lemonboys bar to display titlebars

barPids=/tmp/titleBarPids
touch $barPids

wininfo=$(bspc query -T)
windows=""

SAFEIFS=$IFS
IFS=$'\n'
for i in $wininfo; do
  if [[ $i =~ ^$(printf "\t")[0-9] ]] && [[ $i =~ '*' ]]; then
    windows="$windows $(bspc query -W -d $(echo $i | awk '{print $1}'))"
    windows="$windows M"
  fi
done

if [[ "$windows" == "" ]];then
    kill $(cat $barPids)
    rm $barPids
    exit
fi

IFS=$SAFEIFS

OLDEST_PID=$(pgrep -o 'lemonbar')
test $OLDEST_PID && pgrep 'lemonbar' | grep -vw $OLDEST_PID | xargs -r kill

for proc in $(pgrep 'update-title.sh');do
  kill $proc
done

killall bar

rm $barPids
#sleep 0.01
blankscreen=false
for id in $windows; do
  if [[ $id == "M" ]]; then
    blankscreen=false
    continue
  elif [[ $blankscreen == true ]]; then
    continue
  fi
  if [[ "$(xprop WM_CLASS -id $id)" =~ "Steam" ]]; then
    continue
  fi
  eval $(xwininfo -id $id |
    sed -n -e "s/^ \+Absolute upper-left X: \+\([0-9]\+\).*/x=\1/p" \
           -e "s/^ \+Absolute upper-left Y: \+\([0-9]\+\).*/y=\1/p" \
           -e "s/^ \+Width: \+\([0-9]\+\).*/w=\1/p" \
           -e "s/^ \+Height: \+\([0-9]\+\).*/h=\1/p" )
  geo="${w} ${h} ${x} ${y}"
  geoBar=$(echo $geo| awk '{print $1+2"x32+"$3"+"$4-31}')
  if [ "$h" -lt "1024" ]; then
    geos=("${geos[@]}" "$geoBar")
    ids=("${ids[@]}" "$id")
    bgw=$(($w - 8))
    bgws=("${bgws[@]}" "$bgw")
    if [[ ! -e "/tmp/bg_${bgw}.png" ]]; then
      convert ~/.config/bspwm/bg_tile.png -resize ${bgw}x32\! /tmp/bg_${bgw}.png
    fi
  else
    blankscreen=true
  fi
done

for (( i = 0; i < ${#ids[@]}; i++ )); do
  echo -e 
"%{c}%{I:/tmp/bg_${bgws[i]}.png:}\u200d%{l}%{I:/home/thilo/.config/bspwm/corner.png:}%{r}%{I:/home/thilo/.config/bspwm/corner-r.png:}"  
| bar -p -B "/home/thilo/.config/bspwm/trans.png" -F "#DADADA" -g ${geos[i]} &
  sleep 0.01
  ~/.config/bspwm/update-title.sh ${ids[i]}| lemonbar -g ${geos[i]} -f "Droid Sans:style=bold:size=9" -f 
"Deja Vu Sans:size=9" -p | bash &
done
sleep 0.1
for (( i = 0; i < ${#ids[@]}; i++ )); do
  barinfos="$(xwininfo -tree -root | grep ${geos[i]})"
  bgid="$(echo "$barinfos" | tail -n 1 | awk '{print $1}')"
  xdo above -t "${ids[i]}" "$bgid"
  xdo above -t "$bgid" "$(echo "$barinfos" | head -n 1 | awk '{print $1}')"
done
