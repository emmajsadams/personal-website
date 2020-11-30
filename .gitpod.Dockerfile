FROM ubuntu:20.04

RUN apt update
RUN apt install -y g++ python3-dev libffi-dev libssl-dev python3 make texlive-full gnupg snapd
RUN snap install -y node --classic --channel=14
RUN pip3 install --upgrade pip setuptools
RUN tlmgr init-usertree
RUN tlmgr update --all
RUN tlmgr install XITS
