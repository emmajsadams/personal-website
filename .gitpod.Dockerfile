FROM ubuntu:20.04

RUN apt update

# Setup tzdata for latex
ENV DEBIAN_FRONTEND=noninteractive
RUN ln -fs /usr/share/zoneinfo/America/Denver /etc/localtime
RUN apt-get install -y tzdata
RUN dpkg-reconfigure --frontend noninteractive tzdata

# Install necessary packages
RUN apt install -y g++ python3-dev libffi-dev libssl-dev python3 make texlive texlive-xetex gnupg snapd
RUN snap install node --classic --channel=14

# Install XITS font for latex
RUN tlmgr init-usertree
RUN tlmgr update --all
RUN tlmgr install XITS

# Upgrade pip for node packages
RUN pip3 install --upgrade pip setuptools

