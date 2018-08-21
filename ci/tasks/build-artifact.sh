#!/bin/sh

#echo 'Check all folders'
#ls /tmp -all

#echo 'Before cd'
#pwd
#ls -all

#echo 'List build folder'
#ls /tmp/build -all

# set into source foulder
echo 'set in app folder'
cd training-cf-ui

# install dependencies
echo 'pulling app dependencies'
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
echo 'preparing app build folder'
mkdir build

ls -all

cp ./training-cf-ui/manifest-cloud.yml ./build
cp ./training-cf-ui/package.json ./build
cp ./training-cf-ui/server.js ./build
cp -R ./training-cf-ui/dist ./build

ls ./build -all