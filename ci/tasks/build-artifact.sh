#!/bin/sh

echo 'Before cd'
pwd
ls -all

# set into source foulder
cd training-cf-ui

# install dependencies
npm install

# remove .cache node_modules to avoid mode errors
#rm ./node_modules/.cache/ -R
#ll ./node_modules/.cache

# debug tasks
ls -all
node -v
npm -v

# check angular cli version
npm install -g @angular/cli

# debug tasks
ng -v

# compile in production mode (AOT mode)
ng build --prod

# debug tasks
pwd
ls -all