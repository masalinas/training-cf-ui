#!/bin/sh

# install last angular cli
npm install -g @angular/cli

# set into source foulder
cd training-cf-ui

# check angular cli version
ng -v

# install dependencies
#npm install

# compile in production mode
#ng build --prod