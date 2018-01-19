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

### Patients

`http://localhost:8042/patients`

```
[
   "59987d63-6e64998b-91d6bc45-dcc3fde7-7c7018d7",
   "22613b84-c8ac2476-60023fb3-a589a865-e07265c2",
   "355f107e-f63fb80f-949cf4e1-8af52885-ba7dc4e2"
]
```

### Studies

`http://localhost:8042/studies/`

```
[
   "350d284e-96867187-900a834d-331e9a21-5649a6b3",
   "5c40a82a-8ab286cb-c9c61cf8-b9dba753-f17cd1a2",
   "07dd3594-488e148b-e9271431-f33cd93f-9033c76e",
   "d4b31fdf-ffe6e986-29690225-11a62b07-6ec23b8f"
]
```

### Series

`http://localhost:8042/series`

```
[
   "2cec964b-f70d3e7f-e44fb3cb-0ae31f0a-b1878b28",
   "7181742c-675b0b86-d315151b-c1b290bd-145e993a",
   "4b671ccb-b8ffa00f-06c2ac3a-e3113d98-32e1b104",
   "8c4c35fc-95b8e876-caf0036d-9a10a725-9c3ad1c9",
   "83c29127-2c2aaf56-9be8525b-5719eee8-af3960ce",
   "75f6500b-53e966a9-f26e99a6-bf78ed76-274d6c80",
   "8cf516c1-bd9062ac-e95f5df7-7886fbe7-8b302621"
]
```

### Instances

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
