#!/bin/sh

rm -f public/files/EmmaJCline-resume.tex
rm -f public/files/EmmaJCline-resume.pdf
yarn run generate-latex
xelatex ./public/files/EmmaJCline-resume.tex
mv EmmaJCline-resume.pdf ./public/files/EmmaJCline-resume.pdf
rm -f EmmaJCline-resume.log
rm -f texput.log
rm -f EmmaJCline-resume.out
rm -f EmmaJCline-resume.aux
rm -f public/files/EmmaJCline-resume.aux
rm -f public/files/EmmaJCline-resume.fdb_latexmk
rm -f public/files/EmmaJCline-resume.fls
rm -f public/files/EmmaJCline-resume.log
rm -f public/files/EmmaJCline-resume.out
rm -f public/files/EmmaJCline-resume.synctex.gz
