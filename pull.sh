#!/bin/bash
#This script pulls from remote master branch
git checkout master
git reset --hard
git pull
git fetch -p origin
git merge origin/master
echo Done