#!/bin/sh

rm -f public/files/EmmaAdams_Resumee.tex
rm -f public/files/EmmaAdams_Resume.pdf
npm run generate-latex
xelatex ./public/files/EmmaAdams_Resume.tex
mv EmmaAdams_Resume.pdf ./public/files/EmmaAdams_Resume.pdf
rm -f EmmaAdams_Resume.log
rm -f texput.log
rm -f EmmaAdams_Resume.out
rm -f EmmaAdams_Resume.aux
rm -f public/files/EmmaAdams_Resume.aux
rm -f public/files/EmmaAdams_Resume.fdb_latexmk
rm -f public/files/EmmaAdams_Resume.fls
rm -f public/files/EmmaAdams_Resume.log
rm -f public/files/EmmaAdams_Resume.out
rm -f public/files/EmmaAdams_Resume.synctex.gz
