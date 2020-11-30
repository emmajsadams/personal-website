FROM ubuntu:20.04

RUN apt update
RUN apt install curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
RUN apt update
RUN apt install nodejs=14.10.1 g++ python3-dev libffi-dev openssl-dev python3 make texlive-full gnupg
RUN pip3 install --upgrade pip setuptools
RUN tlmgr init-usertree
RUN tlmgr update --all
RUN tlmgr install XITS
