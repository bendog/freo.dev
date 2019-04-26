# freo.dev

This is a simple v0.1 for the https://freo.dev developer group.  
This version is simple html and css, and isn't expected to do anything to fancy.

![Build Status](https://codebuild.ap-southeast-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiKytqOTJMZ0FSWlNyWXlTckRwVy9MMlVCS3Y5MXBXSTR1NVpnV1Fobnc1dTVUdWV6TEV2TUYrYWkxbnAvekF0bGYrb0VpZHJlUi9namVWd09INnJEa1FBPSIsIml2UGFyYW1ldGVyU3BlYyI6IjlndTB4R3AzcjNiZ01QQy8iLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

## Dev notes

### Styling and Compiling SASS3.0 to css

the CSS library being used is mustard-ui <https://github.com/kylelogue/mustard-ui>.

the freo.pub style is `src/freo.scss`

you can build sass to the static css `static/css/freo.css` with this script.  
**Note: requires sass to be installed**

    ./build.sh

if you want to watch for changes you can use

    ./build.sh --watch

## Deploying

there's a quick s3 sync script, this should run automatically when the master branch is updated on github.

    ./build.sh
