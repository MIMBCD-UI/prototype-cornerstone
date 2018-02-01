# MIMBCD-UI Cornerstone Prototype

<img src="assets/banner.png"/>

[MIMBCD-UI](https://mimbcd-ui.github.io/) is a Research Project that deals with the use of a recently proposed technique in literature: [Deep Convolutional Neural Networks (CNNs)](https://en.wikipedia.org/wiki/Convolutional_neural_network). These deep networks will incorporate information from several different modes by a User Interface (UI) implemented using the [Cornerstone Library](https://github.com/chafey/cornerstone). The [Cornerstone](https://github.com/chafey/cornerstone) is an Open Source Project with a goal to deliver a complete web based medical imaging platform.

## Install and Run

This project needs both [`npm`](https://www.npmjs.com/) and [`http-server`](https://github.com/indexzero/http-server) dependencies to install and run the core project. If you do not have those installed please follow the [`INSTALL`](src/INSTALL.md) instructions.

### Run

1) Go to the Source folder:

`cd src/`

2) Start the DICOM Server (Orthanc):

`npm run dicom-server`

OR

```
cd ..
cd dicom-server/orthancAndPluginsOSX.stable/
./startOrthanc.command
```

3) Open the link:

`localhost:8042`

NOTE: If you need some help see the [Demo](https://youtu.be/tkzpT3KpY2A).

4) Go inside the code folder:

`cd src/`

5) Run the code:

`npm start`

6) Open the link:

`localhost:8080`

#### Allow-Control-Allow-Origin

Access-Control-Allow-Origin is a [CORS (Cross-Origin Resource Sharing) header](https://www.html5rocks.com/en/tutorials/cors/). If you want to know [How does Access-Control-Allow-Origin header work?](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work) follow the files.

##### Google Chrome

* To deal with the CORS issue it is necessary to open [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/) with `--disable-web-security` flag on:

```
open /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir
```

* Or install the  [CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) plugin for [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/).

## About

For more information about the [MIMBCD-UI](https://mimbcd-ui.github.io/) Project just follow the [link](https://github.com/MIMBCD-UI/meta). Informations about details of this repository are also in a [wiki](https://github.com/MIMBCD-UI/prototype-cornerstone/wiki).

### License

Copyright © 2017 [Instituto Superior Técnico (IST)](https://tecnico.ulisboa.pt/en/)

The [`prototype-cornerstone`](https://github.com/MIMBCD-UI/prototype-cornerstone) repository is distributed under the terms of both [Academic License](https://github.com/MIMBCD-UI/prototype-cornerstone/blob/master/ACADEMIC.md) and [Commercial License](https://github.com/MIMBCD-UI/prototype-cornerstone/blob/master/COMMERCIAL.md), for academic and commercial purpose, respectively. For more information regarding the [License](https://github.com/MIMBCD-UI/prototype-cornerstone/blob/master/LICENSE.md) of the hereby repository, just follow both [ACADEMIC](https://github.com/MIMBCD-UI/prototype-cornerstone/blob/master/ACADEMIC.md) and [COMMERCIAL](https://github.com/MIMBCD-UI/prototype-cornerstone/blob/master/COMMERCIAL.md) links.

### Acknowledgments

Marcelo Ribeiro
