#!/bin/sh

yarn run test
yarn run lint
yarn run latex
yarn run docz-build
