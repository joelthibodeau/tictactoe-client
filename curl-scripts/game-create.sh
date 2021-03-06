# sh curl-scripts/json/game-create.sh
# https://git.generalassemb.ly/ga-wdi-boston/game-project/issues/1850

curl --include \ "https://tic-tac-toe-wdi.herokuapp.com/games/" \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "id": "'"${ID}"'",
      "cells": ["","","","","","","","",""],
      "over": false,
      "player_x": {
        "id": 1,
        "email": "'"${EMAIL}"'"
      },
      "player_o": null
}'

echo
