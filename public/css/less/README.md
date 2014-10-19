# angular-seed-spm

angular-seed

用于构建angular项目的模板工程，适用于直接构建ng项目。

本项目是提供了spm支持(即支持commonJs规范)的angular-seed模板。


## angular-seed-spm less

这里是基于less进行样式的自动处理工具，使用gulp进行自动生成。

### 目录结构：

```
├── ass.min.css
├── dev
│   ├── ass.css
│   └── ass.min.css
└── less
    ├── gulpfile.js
    ├── node_modules
    │   ├── del
    │   ├── gulp
    │   ├── gulp-autoprefixer
    │   ├── gulp-less
    │   ├── gulp-minify-css
    │   ├── gulp-notify
    │   ├── gulp-rename
    │   ├── gulp-sourcemaps
    │   └── gulp-watch
    ├── package.json
    ├── README.md
    └── src
        └── ass.less
```

* /less/src     less源文件
* /dev          未压缩和压缩的css文件
* /*.min.css    用于生产环境的css文件

### 处理命令：

* gulp          默认命令生成全部的css文件，包含压缩和未压缩以及生产环境的css
* gulp watch    在使用gulp命令处理后进行调试过程中用于监视代码变化并自动构建
* gulp less     （通常上面两条就足够你的日常使用了，其他的，基本没用了。。。）

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