# MIMBCD-UI Cornerstone Prototype

[MIMBCD-UI](https://mimbcd-ui.github.io/) is a Research Project that deals with the use of a recently proposed technique in literature: [Deep Convolutional Neural Networks (CNNs)](https://en.wikipedia.org/wiki/Convolutional_neural_network). Deep networks will incorporate information from several different modes by a User Interface (UI) implemented using the [Cornerstone Library](https://github.com/chafey/cornerstone). The [Cornerstone](https://github.com/chafey/cornerstone) is an Open Source Project with a goal to deliver a complete web based medical imaging platform. This Research Project is also using a lightweight DICOM server for medical imaging called [Orthanc](http://www.orthanc-server.com/).

## Install and Run

This project needs both [`npm`](https://www.npmjs.com/) and [`http-server`](https://github.com/indexzero/http-server) dependencies to install and run the core project. If you do not have those installed please follow the [`INSTALL`](src/INSTALL.md) instructions. We are using [Orthanc](http://www.orthanc-server.com/) as DICOM Server, your can use it or use yours. If you already have your DICOM Server please jump for section [Run](https://github.com/MIMBCD-UI/prototype-cornerstone#run).

### DICOM Server

1. Clone the dicom-server repository to your machine:

`git clone git@github.com:MIMBCD-UI/dicom-server.git`

1. Go to the Orthanc folder:

`cd dicom-server/orthancAndPluginsOSX.stable/`

2. Start Orthanc DICOM Server choosing one of the two options:

2.1. By using the terminal:

`./startOrthanc.command`

2.2. Or alternatively, double click and run the file:

`startOrthanc.command`

3. Open the link:

`localhost:8042`

If you need some help see the [Demo](https://youtu.be/tkzpT3KpY2A)

### Run

1. Go inside the code folder:

`cd src/`

2. Run the code:

`node node_modules/http-server/bin/http-server`

3. Open the link:

`localhost:8080`
