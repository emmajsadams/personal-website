#!/bin/sh

git diff --exit-code public/files/EmmaAdams_Resume.tex

if [ $? -eq 1 ]; then
	echo "LaTex file has changes, raising error for user to commit resume changes"
	exit 125
else
	echo "LaTex file has no changes, removing PDF"
	git checkout public/files/EmmaAdams_Resume.pdf
fi

echo "Success"
exit 0
