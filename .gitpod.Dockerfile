FROM ubuntu:20.04

RUN apt update
RUN snap install node --classic --channel=14
RUN apt install -y nodejs=14.15.1 g++ python3-dev libffi-dev libssl-dev python3 make texlive-full gnupg
RUN pip3 install --upgrade pip setuptools
RUN tlmgr init-usertree
RUN tlmgr update --all
RUN tlmgr install XITS
