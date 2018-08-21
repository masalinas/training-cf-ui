#!/bin/sh

#echo 'Check all folders'
#ls /tmp -all

#echo 'Before cd'
#pwd
#ls -all

#echo 'List build folder'
#ls /tmp/build -all

# set into source foulder
echo 'set into App folder'
cd training-cf-ui

# install dependencies
echo 'pulling App dependencies'
npm install

# remove .cache node_modules to avoid mode errors
#rm ./node_modules/.cache/ -R
#ll ./node_modules/.cache

# debug tasks
#ls -all
#node -v
#npm -v

# check angular cli version
echo 'installing angular CLI dependency'
npm install -g @angular/cli

# debug tasks
ng -v

# compile in production mode (AOT mode)
ng build --prod

# debug tasks
#pwd
#ls -all

# preparing build folder
echo 'preparing App build folder'
mkdir build

cp manifest-cloud.yml ./build
cp package.json ./build
cp server.js ./build
cp -R ./dist ./build

ls ./build -all