FROM node:14.10.1-alpine

RUN apk add --no-cache --virtual .build-deps g++ python3-dev libffi-dev openssl-dev python3 make texlive-full gnupg texmf-dist
RUN tlmgr init-usertree
RUN sudo tlmgr update --all
RUN tlmgr install XITS
RUN pip3 install --upgrade pip setuptools
