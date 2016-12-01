### 001 getting start webpack初体验
---
1. 体验
- 新建一个项目文件:`001-gettingstart`
- 初始化项目:`npm init`
- 新建webpack配置文件:`webpack.config.js`
- 编写webpack配置文件:
    ```
    module.exports = {
        entry: './app/app.js',
        output: {
            path: 'dist',
            filename: 'app.bundle.js'
        }
    }
    ```
- 新建项目文件夹:`app`
- 新建项目入口文件:`app/app.js`
- 此时的项目目录结构
    ```
    001-gettingstart
    |-  app     项目的所有源代码,包括js|图片|css|html等等等
    |   |-  app.js  项目的入口js文件
    |-  package.json    项目的依赖文件
    |-  webpack.config.js   项目的webpack配置文件
    ```
- 编辑`app.js`:
    ```
    document.write("hello webpack")
    ```
- 命令行执行`webpack`

    此时可以看到项目的根目录多了一个文件夹:`dist`,并且该文件夹下又一个文件:`app.bundle.js`
- 查看`app.bundle.js`
    ```
    /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    
    /******/ 		// Check if module is in cache
    /******/ 		if(installedModules[moduleId])
    /******/ 			return installedModules[moduleId].exports;
    
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
    /******/ 			exports: {},
    /******/ 			id: moduleId,
    /******/ 			loaded: false
    /******/ 		};
    
    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    
    /******/ 		// Flag the module as loaded
    /******/ 		module.loaded = true;
    
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    
    
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
    /******/ })
    /************************************************************************/
    /******/ ([
    /* 0 */
    /***/ function(module, exports) {
    
    	document.write("hello webpack")
    
    /***/ }
    /******/ ]);
    ```
    可以看到我们写在`app.js`中的代码被打包到了这里,至此,我们的webpack项目最简单的配置已经完成了.
    
- 最终项目目录结构:
    ```
        001-gettingstart
        |-  app     项目的所有源代码,包括js|图片|css|html等等等
        |   |-  app.js  项目的入口js文件
        |-  dist    项目打包文件
        |   |-  app.bundle.js 项目的js打包文件
        |-  package.json    项目的依赖文件
        |-  webpack.config.js   项目的webpack配置文件
    ```
2. `webpack`命令:
    - `webpack` : 打包文件
    - `webpack --config XXX.js` : 使用特定配置文件
    - `webpack --watch` : 监听文件变化并自动打包
    - `webpack -p` : 生成压缩混淆文件
    - `webpack -d` : 生成map映射文件，告知哪些模块被最终打包到哪里了
    