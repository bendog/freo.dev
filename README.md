# freo.pub

This is a simple v0.1 for the http://freo.pub developer group.  
This version is simple html and css, and isn't expected to do anything to fancy.

## Dev notes

### Styling and Compiling SASS3.0 to css

the CSS library being used is mustard-ui <https://github.com/kylelogue/mustard-ui>.

the freo.pub style is `src/freo.pub.scss`

you can build sass to the static css `static/css/freo.pub.css` with this script.  
**Note: requires sass to be installed**

    ./build.sh

if you want to watch for changes you can use

    ./build.sh --watch

## Deploying

there's a quick s3 sync script

    ./build.sh
