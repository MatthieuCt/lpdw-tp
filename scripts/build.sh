#Clean
rm -r dist/*
rm -r modules/*
#Build JS
./node_modules/.bin/webpack --config webpack.prod.config.js && ./node_modules/.bin/babel src -d modules
#Build CSS
./node_modules/.bin/node-sass --include-path scss ./src/styles/DEDReactCarousel.scss --output-style compressed  -out-file ./dist/DEDReactCarousel.min.css
