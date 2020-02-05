#!/bin/bash
#This script pulls from remote master branch
cd /home/tiimi07/
git checkout master
git add * 
git stash
git pull
git fetch -p origin
git merge origin/master
chmod -R 711 *
echo Done
