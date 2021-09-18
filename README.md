<p align="center">
  <img src="https://i.imgur.com/7Fd7sLq.png" alt="Sublime's custom image"/>
</p>

# Iris
Provides a responsive mobile and tablet view for developing and testing mobile first websites and web applications.    
Iris is written in HTML / CSS / JS and is powered through **Electron.js**.

### Features    
* View projects running on local server
* Refresh seemingly upon every save without the need to reload
* Choose between a smart phone or tablet
* A variety of mockups in order to display your project the way you want to
* Supports Windows & macOS

***

### Installation    
* Pre-built binaries are available in the Release tab
* Just download and launch &ndash; no setups required
* You can also clone this repo to build it yourself    


### Build it yourself

Clone repo
```
git clone https://github.com/emilavara/Iris.git
```
CD into the repo folder
```
cd Iris
```
Install Electron and dependencies
```
npm i electron
npm i --save-dev electron-packager
```

Time to build!

Build for Windows | Build for macOS | Build for Linux
------------ | ------------- | -------------
``` npm run package-win ``` | ``` npm run package-mac ``` | ``` npm run package-linux ```
