#!bin/bash

echo -e "\u001b[32mInstalando las dependencias!"

pkg update && pkg upgrade
apt update && apt upgrade

echo -e "\u001b[32mSe instaló todas las dependencias!"
