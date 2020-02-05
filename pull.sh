#!/bin/bash
#This script pulls from remote master branch
git checkout master
git add * 
git stash
git pull
git fetch -p origin
git merge origin/master
echo Done
