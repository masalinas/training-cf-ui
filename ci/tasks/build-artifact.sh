#!/bin/sh

# set into App folder
echo '1. set into App folder'
cd training-cf-ui

# pulling App dependencie
echo '2. pulling App dependencies'
npm install

# remove .cache node_modules to avoid mode errors
#rm ./node_modules/.cache/ -R

# installing angular CLI dependency
echo '3. installing angular CLI dependency'
npm install -g @angular/cli

# checking andular dependencies
echo '4. checking andular dependencies'
ng -v

# compile App in production mode (AOT mode)
echo '5. compile App in production mode (AOT mode)'
ng build --prod

# preparing App dist folder
echo '6. preparing App dist folder'

cp package.json ../training-cf-ui-dist
cp server.js ../training-cf-ui-dist
cp -R ./dist ../training-cf-ui-dist
cp manifest-cloud.yml ../training-cf-ui-dist