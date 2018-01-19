# MIMBCD-UI Cornerstone Prototype

<img src="assets/banner.png"/>

[MIMBCD-UI](https://mimbcd-ui.github.io/) is a Research Project that deals with the use of a recently proposed technique in literature: [Deep Convolutional Neural Networks (CNNs)](https://en.wikipedia.org/wiki/Convolutional_neural_network). These deep networks will incorporate information from several different modes by a User Interface (UI) implemented using the [Cornerstone Library](https://github.com/chafey/cornerstone). The [Cornerstone](https://github.com/chafey/cornerstone) is an Open Source Project with a goal to deliver a complete web based medical imaging platform.

## Install and Run

This project needs both [`npm`](https://www.npmjs.com/) and [`http-server`](https://github.com/indexzero/http-server) dependencies to install and run the core project. If you do not have those installed please follow the [`INSTALL`](src/INSTALL.md) instructions.

### Run

1) Go to the Orthanc folder:

`cd dicom-server/orthancAndPluginsOSX.stable/`

2) Double click and run the file:

`./startOrthanc.command`

3) Open the link:

`localhost:8042`

If you need some help see the [Demo](https://youtu.be/tkzpT3KpY2A).

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

`open /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir`

* Or install the  [CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) plugin for [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/).

## TODO

`http://localhost:8042/app/explorer.html`

`http://localhost:8042/instances/`

```
[
   "26eb8b88-ff7afef9-e4d3ef85-5fbe799c-3082da71",
   "adf49420-c035cd33-64053e3c-fad3de69-ac9cead4",
   "0e7c5fac-ef55ae7c-ec56e356-74ac42c2-f4f2a32a",
   "89f90986-52a79581-81d5cfef-f0a594b3-f33df53c",
   "3ea91193-d664157d-cdc5e876-fd2b7010-8b9f462f",
   "fddde464-e57f3f55-fc5c0b82-5ee8ea9c-afa8acc4",
   "7aae3a41-051f2909-3e1bc940-1b75e78a-55915f67",
   "a1862117-6f30aebe-b104a727-59eb36c2-bf0f70c4"
]
```

`http://localhost:8042/instances/26eb8b88-ff7afef9-e4d3ef85-5fbe799c-3082da71`

```
{
   "AnonymizedFrom" : "2805874b-c3e7a807-e0ecd8ca-fc359751-5ab3b99b",
   "FileSize" : 776288,
   "FileUuid" : "E95F9AA0-B981-4566-A698-3EE5DA175979",
   "ID" : "26eb8b88-ff7afef9-e4d3ef85-5fbe799c-3082da71",
   "IndexInSeries" : 9,
   "MainDicomTags" : {
      "ImagePositionPatient" : "0\\0\\0",
      "InstanceCreationDate" : "20170203",
      "InstanceCreationTime" : "193629",
      "InstanceNumber" : "9",
      "SOPInstanceUID" : "1.2.276.0.7230010.3.1.4.0.895.1491844658.521379"
   },
   "ParentSeries" : "2cec964b-f70d3e7f-e44fb3cb-0ae31f0a-b1878b28",
   "Type" : "Instance"
}
```
