FROM node:14.10.1-alpine

RUN apk add --no-cache --virtual .build-deps g++ python3-dev libffi-dev openssl-dev python3 make asciidoctor texlive-full
RUN pip3 install --upgrade pip setuptools
RUN gem install asciidoctor-latex --pre
