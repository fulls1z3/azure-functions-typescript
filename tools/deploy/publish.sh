#!/bin/bash
git config --global user.email "${GH_USER_EMAIL}"
git config --global user.name "${GH_USER_NAME}"

REV=`git rev-parse HEAD`
REV=${REV:0:7}
git checkout -b "$1"
git rm -rf .
git checkout master -- .gitignore
git checkout master -- .circleci/config.yml
cp -rf dist/* . && rm -rf dist

git add --all .
git commit -m "chore(publish): publish commit $REV"
git push --all --force

exit 0
