#!/bin/bash

yarn run lint
yarn run latex

if [ -f ./public/files/EmmaJCline-resume.tex ]; then
	# If the LaTeX file was regenerated then prevent a push so the new pdf can be generated
	exit 2
else
	# If the LaTeX file was not regenerated from the yarn run latex then remove the unchanged PDF
	rm ./public/files/EmmaJCline-resume.pdf
fi

exit 0
