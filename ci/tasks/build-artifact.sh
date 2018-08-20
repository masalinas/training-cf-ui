#!/bin/sh

# set into source foulder
cd training-cf-ui

# install dependencies
npm install

# remove .cache node_modules to avoid mode erros
rm node_modules/.cache/ -R  

# debug tasks
ls -all
node -v
npm -v

# check angular cli version
npm install -g @angular/cli

# debug tasks
#ng -v

# compile in production mode
ng build --prod

# debug tasks
ls -all