# Poem
[中文文档](http://codpoe.me/)

An elegant theme for [Hexo](https://hexo.io/). Some of the desgin are inspired by [EVAN YOU's blog](http://evanyou.me).

## Installation
Clone this repository

```
$ git clone git@github.com:Codpoe/hexo-theme-poem.git
```

Then you can modify theme setting in `hexo-theme-poem/_config.yml`.

## Configuration
The default configuration:

```
# If you have any problem about this theme, 
# please let me kown it via email or GitHub issue.
# Thanks!

# first_screen
## the links part of first screen: you can add any link, just like <GitHub: [your github url]>
first_screen:
  open: true ## toggle whether your site shows the first screen
  name: Poem ## the largest word on the first screen
  description: Life is a Poem ## The description of your site
  links: 

# header
## the links part of header supports: 
## email, weibo, twitter, github, gitlab, facebook, dribbble, behance
header:
  logo: ## the logo on the header
  links: 

  menu: ## the menu on the header, you can customize it.
    home: /
    category: /categories/
    archive: /archives/
    about: /about/

# footer
copyright: 
  time: 2017 ## the time of copyright in the footer
  name: Poem ## the name of copyright in the footer

# triangle_canvas
triangle_canvas: true ## toggle whether your site show the colorful triangle-canvas in the top of all page

# disqus
## you can find more help on https://disqus.com/.
disqus:
  open: false ## toggle whether your site open the disqus
  shortname: ## your disqus shortname


```

## Features
### Read More
At most time, we don't want to show the full content of the post, then You can seperate your post content with `<!--more-->`. The content behind the `<!--more-->` will be hidden on the home page.

### Normal Page
If you want to add a normal page with header and footer(eg. the about page), just create a folder that contains a `index.md` file in the `source` folder in the root directory, and add `layout: normal` in `front-matter` in `index.md`.

Note that the normal page will open the comments by default. If you want to close the comments, just normal, add `comments: false` in `front-matter` in `index.md`.

### Clean Page
If you want to add a clean page with nothing that you can customize completely, just create a folder that contains a `index.html` file in the `source` folder in the root directory.

### Languages
Currently only English(default) and Simplified Chinese(zh-CN) are supported.

## More
### How to navigate to the new page?
The url of the new page(normal page or clean page) is `http(s)://[your site address]/[the name of the folder that contains the new page]`.

## Todo
- Some widgets
- The progress bar of the post page
- ...

