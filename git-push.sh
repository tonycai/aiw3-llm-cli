#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Check if a commit message is provided
if [ -z "$1" ]; then
  echo "Error: Commit message is required."
  echo "Usage: ./git-push.sh \"Your commit message\""
  exit 1
fi

# 1. Add all changes to the staging area
echo "Adding all changes to staging area..."
git add .

# 2. Commit the changes with the provided message
echo "Committing changes..."
git commit -m "$1"

# 3. Push the changes to the remote repository
echo "Pushing to remote repository..."
git push

echo "Git push successful!"

