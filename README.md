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

Access-Control-Allow-Origin is a [CORS (Cross-Origin Resource Sharing) header](https://www.html5rocks.com/en/tutorials/cors/). If you want to know [How does Access-Control-Allow-Origin header work?](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work) follow the link.

##### Google Chrome

* To deal with the CORS issue it is necessary to open [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/) with `--disable-web-security` flag on:

```
open /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir
```

* Or install the  [CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) plugin for [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/).

## About

For more information about the [MIMBCD-UI](https://mimbcd-ui.github.io/) Project just follow the [link](https://github.com/MIMBCD-UI/meta). Pieces of information about details of this repository are also in a [wiki](https://github.com/MIMBCD-UI/prototype-cornerstone/wiki). This prototype was developed using several libraries and dependencies. Despite that all libraries had their importance and supported the development, one of it was of chief importance. The [CornerstoneJS](https://cornerstonejs.org/) library and [secondary libraries](https://github.com/cornerstonejs), respectively, are supporting this prototype. We Acknowledge all people involved in the path.

### License

Copyright © 2017 [Instituto Superior Técnico (IST)](https://tecnico.ulisboa.pt/en/)

The [`prototype-cornerstone`](https://github.com/MIMBCD-UI/prototype-cornerstone) repository is distributed under the terms of both [Academic License](https://github.com/MIMBCD-UI/prototype-cornerstone/blob/master/ACADEMIC.md) and [Commercial License](https://github.com/MIMBCD-UI/prototype-cornerstone/blob/master/COMMERCIAL.md), for academic and commercial purpose, respectively. For more information regarding the [License](https://github.com/MIMBCD-UI/prototype-cornerstone/blob/master/LICENSE.md) of the hereby repository, just follow both [ACADEMIC](https://github.com/MIMBCD-UI/prototype-cornerstone/blob/master/ACADEMIC.md) and [COMMERCIAL](https://github.com/MIMBCD-UI/prototype-cornerstone/blob/master/COMMERCIAL.md) files.

### Acknowledgments

A special thanks to [Chris Hafey](https://www.linkedin.com/in/chafey/), the propelling person of [CornerstoneJS](https://cornerstonejs.org/), who also developed the [cornerstoneDemo](https://github.com/chafey/cornerstoneDemo). Not forgetting the three supporters of the CornerstoneJS library, [Aloïs Dreyfus](https://www.linkedin.com/in/alois-dreyfus), [Danny Brown](http://dannyrb.com/) and [Erik Ziegler](https://www.npmjs.com/~swederik). We also would like to give a special thanks to [Erik Ziegler](https://www.npmjs.com/~swederik) who support several [issues](https://groups.google.com/forum/#!forum/cornerstone-platform) during this path.

- [Aloïs Dreyfus](https://www.linkedin.com/in/alois-dreyfus) ([adreyfus](https://github.com/adreyfus))

- [Chris Hafey](https://www.linkedin.com/in/chafey/) ([chafey](https://github.com/chafey))

- [Danny Brown](http://dannyrb.com/) ([dannyrb](https://github.com/dannyrb))

- [Erik Ziegler](https://www.npmjs.com/~swederik) ([swederik](https://github.com/swederik))

- [Marcelo Ribeiro](http://www.sysline.inf.br/) ([sysline](https://github.com/sysline))

- [Sébastien Jodogne](https://www.linkedin.com/in/jodogne/) ([jodogne](https://github.com/jodogne))
