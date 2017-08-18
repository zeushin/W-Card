#!/usr/bin/env bash
echo 'Deploy W-Card!!!'
echo '----------------'
echo 'npm build'
npm build
echo '----------------'
echo 'firebase deploy'
firebase deploy