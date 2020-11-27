#!/bin/bash

echo $PRIVATE_GPG_KEY > ~/.gnupg/private.key

# Setup git config
git config --global user.name "Emma Cline" && git config --global user.email "emma@cline.engineer"

# import gpg key (see notion) and setup signing https://docs.gitlab.com/ee/user/project/repository/gpg_signed_commits/
git config --global user.signingkey D7F85BABB34275D5
export GPG_TTY=$(tty)
git config --global commit.gpgsign true

# cache gpg ttl to prevent asking for gpg every time. add to ~/.gnupg/gpg-agent.conf
echo "default-cache-ttl 34560000" > ~/.gnupg/gpg-agent.conf
echo "maximum-cache-ttl 34560000" > ~/.gnupg/gpg-agent.conf
gpg-connect-agent reloadagent /bye

# https://stackoverflow.com/questions/3042437/how-to-change-the-commit-author-for-one-specific-commit
git filter-branch -f --env-filter '

OLD_EMAIL="emma@stebbins.dev"
CORRECT_NAME="Emma Cline"
CORRECT_EMAIL="emma@cline.engineer"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags && git push --force --tags origin 'refs/heads/*
