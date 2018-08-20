#!/bin/sh

# set into source foulder
cd training-cf-ui

# install dependencies
npm install

# debug tasks
ls -all
node -v
npm -v

# check angular cli version
npm install -g @angular/cli

# debug tasks
ng -v

# compile in production mode
#ng build --prod