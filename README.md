# angular-seed-spm

angular-seed

用于构建angular项目的模板工程，适用于直接构建ng项目。

本项目是提供了spm支持(即支持commonJs规范)的angular-seed模板。


## Install (安装)：


### Global Environment
* install nodejs
* install spm （npm install spm -g）

### Install Modules
* cd apps && npm install
* cd public/css/less && npm install

## Useage (使用):

### apps
*    支持commonJS规范的js应用
*    工作目录为./apps/
*    命令：spm build

### public/css/less
*    支持less自动生成与处理
*    工作目录为./public/less/
*    命令：gulp

## explain (说明):


### Directories:

```
├── apps
│   ├── dist
│   │   └── angular-seed-spm
│   ├── examples
│   │   └── index.md
│   ├── HISTORY.md
│   ├── index.js
│   ├── package.json
│   ├── README.md
│   ├── sea-modules
│   │   ├── expect.js
│   │   ├── seajs
│   │   └── seajs-wrap
│   ├── _site
│   │   ├── coverage.html
│   │   ├── coverage.json
│   │   ├── dist
│   │   ├── examples
│   │   ├── history.html
│   │   ├── index-cov.js
│   │   ├── index.html
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── sea-modules
│   │   ├── static
│   │   └── tests
│   ├── src
│   └── tests
│       └── angular-seed-spm-spec.js
├── public
│   ├── css
│   │   ├── ass.min.css
│   │   ├── dev
│   │   └── less
│   ├── images
│   └── vendors
└── README.md
```

### Explain:

* public
    * public           为共有文件目录
    * public/css      样式表文件目录
    * public/images   图像资源目录
    * public/vendors  其他库的资源文件（例如jquery等）
* apps
    * apps            应用目录
    * apps/src        源码目录（未打包）
    * apps/dist       打包后的代码目录
    * apps/sea-module 库文件

## License

The MIT License (MIT)

Copyright (c) 2014 [@Thonatos.Yang](http://github.com/thonatos)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.