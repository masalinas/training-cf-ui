#!/bin/sh

echo 'Check all folders '
ls /tmp -all

echo 'Before cd'
pwd
ls -all

# set into source foulder
cd training-cf-ui

# install dependencies
echo 'pulling dependencies'
npm install

# remove .cache node_modules to avoid mode errors
#rm ./node_modules/.cache/ -R
#ll ./node_modules/.cache

# debug tasks
ls -all
node -v
npm -v

# check angular cli version
echo 'installing angular CLI dependency'
npm install -g @angular/cli

# debug tasks
ng -v

# compile in production mode (AOT mode)
ng build --prod

# debug tasks
pwd
ls -all

echo 'Moving dist folder'
mv ./dist /tmp/build/put/training-cf-ui 
ls /tmp/build/put/training-cf-ui  -all