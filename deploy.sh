#!/usr/bin/env sh

set -e

npm run build

cd dist

git add -A
git commit -m "New Deployment"
git push -f git@github.com:emorato11/star-wars-app.git main:gh-pages

cd -