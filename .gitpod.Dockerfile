FROM ubuntu:20.04

RUN sudo apt install g++ python3-dev libffi-dev openssl-dev python3 make texlive-full gnupg
RUN tlmgr init-usertree
RUN sudo tlmgr update --all
RUN tlmgr install XITS
RUN pip3 install --upgrade pip setuptools
