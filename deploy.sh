#!/usr/bin/env bash
./build.sh
aws s3 sync ./ s3://freo.pub/ --exclude="*.git/*" --exclude="*src/*" --exclude="*.sh" --exclude="*.DS_Store*"
