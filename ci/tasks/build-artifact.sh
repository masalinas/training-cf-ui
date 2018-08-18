#!/bin/sh

# set into source foulder
cd training-cf-ui

# check angular cli version
npm install -g @angular/cli
ng -v

# install dependencies
#npm install

# compile in production mode
#ng build --prod