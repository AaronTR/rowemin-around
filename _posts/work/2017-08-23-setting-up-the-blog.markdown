---
layout: post
title: Setting Up The Blog
category: [all, work]
tags: [general]
description: Ok, this one actually does have something to do with programming
permalink: /blog/:title/
image: /assets/images/posts/setting-up-blog/setting_up_blog_header.jpg
images:
 - url: /assets/images/posts/setting-up-blog/setting_up_blog_header.jpg
   alt: Setting Up The Blog
   title: Setting Up The Blog
---

So for the last three years, trading software for money has kept me from starving to death, which I think is pretty neat. 

Programming is something I really enjoy and when I really enjoy something, I like to share it. So in that spirit, I’d like to dive head first into the work related posts. In this post I'll give you an overview of the tech behind my blog and how I set it up for exactly $0. 

This post will assume the reader has at least some experience with web development, git, and Github. Since I know a lot of you guys don’t fall into that category, though, with the next few posts I plan to break this process down step by step so that someone with absolutely no programming experience can set it up themselves. Bear with me on this one if you can’t quite follow along yet. I’ll circle back afterwards and attempt to get everyone up to speed.

## The Plan
When I first decided to leave on this trip, I knew I wanted to create a blog in order share my thoughts and experiences. The only problem with that was that websites traditionally cost money to build and I was trying to spend as little money as possible. So I formed a checklist. I want my blog to be:

1. Free!
2. Good Looking
3. Easy to update and fully customizable
4. Created using tools that don't suck

Seems like that's asking a bit much doesn't it? A fully customizable blog, hosted for free, and created using a platform I would actually enjoy programming with? Didn't seem likely. But after a bit of research, it turns out that such a thing does exist and it's super simple to setup as long as you're willing to get your hands a bit dirty.

<div class="post-image-container">
  <div class="image-col">
    <img src="/assets/images/posts/setting-up-blog/Octocat.jpg" alt="Octocat">
  </div>
  <div class="image-col">
    <img src="/assets/images/posts/setting-up-blog/jekyll_logo.png" alt="Jekyll Logo">
  </div>
</div>

## The Tech
Enter [Github Pages](https://pages.github.com/) and [Jekyll](https://jekyllrb.com/). If you’re not familiar with Github Pages, they are essentially lightweight static websites connected to Github repositories that Github hosts free of charge. The original purpose of these sites was to serve a super simple static page where users could advertise the content of their repository. Of course, in the programming world, “super simple” is never enough and you get jokers like us trying to figure out how to host full blog sites on them.

Jekyll is a static site generator created by a very clever group of these jokers. It's built with Ruby and designed specifically to play nicely with Github Pages. At it's core Jekyll is “blog aware” meaning that it has most of the components necessary for creating a blog already built in. Things like categories, tags, permalinks, and differentiation between pages and posts. Since it generates static sites, this means we don’t have any control over the server side operation of the site, but since we don’t really need anything more than a little html, javascript, and markdown to create a schnazzy blog that’s just fine.

Sounds pretty promising, let's review the checklist. Are these tools that don't suck? Admittedly, when I started building the blog I had never used Jekyll, but I had heard good things from coworkers. After glancing at Jekyll's site it seemed that getting things up and running would be pretty painless, so I went for it. Well, after a couple months of using it, I can assure you that Jekyll does not suck. And I was planning on hosting my repos on Github anyway so that was just a bonus. Checkmark in the "doesn't suck" category. 

Is it easy to update and fully customizable? Easy to update, definitely. Since the repository's production branch is actually what's displayed on the web, you get a sort of de facto automated code deployment built in. Buuut I can't say this setup is fully customizable since you don't have any control over the server it lives on. As I mentioned earlier, though, server access isn't entirely necessary so I'll go ahead and put a checkmark in that category.

Will it be good looking? Well that's always up to the designer isn't it? But I mean no matter what, it's gonna have a bunch of selfies on it. Of course it's going to be good looking ;). Check.

But most importantly, if you do it right it's 100% FREE! Big ol' check there.

Perfect. How do we set this baby up?

<div class="post-image-container">
  <img src="/assets/images/posts/setting-up-blog/site_setup.png" alt="Site Setup">
</div>

## The Setup

So there are a couple ways to do this and both are pretty straight forward. You can follow [Github’s instructions](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) if you'd like. This will show you how to set up a site using the _gh-pages_ Ruby gem. These instructions are well written and straightforward BUT you'll have to use the _gh-pages_ branch of your github repository to host your site. Traditionally, that’s what you’re supposed to do. However, if you look at the [Github Pages naming conventions](https://help.github.com/articles/user-organization-and-project-pages/), you’ll see that if you do this, your site will have the URL **_(username).github.io/(project_name)_**. Now if that’s fine with you, I’d recommend you go ahead and follow the instructions in that Gtihub help link above. You always have the ability to purchase a domain name and hook it up to the site later. As you probably noticed, this is what I ended up doing with my blog. But I mean, come on… Rowemin’ Around. Pure gold. Had to buy it. 

But for the purpose of this tutorial we’re going to be beggars and choosers. I’m picky and think the _(username).github.io/(project_name)_ name format sucks. Since this is going to be our personal site, I’d much rather the URL just reference our username at _(username).github.io_. If you look back at the naming chart you can see the way to do that is to create a repository called _(username).github.io_ and make sure your site files are in the _master_ branch. Sounds good to me.

However you decide to do it, you’ll have to first create a Github account with a username that you’d like to use in the URL of your site. Once you’ve done that, make sure Ruby is installed on your machine. To find out if it’s already installed, type the command
~~~
ruby -v
~~~
Into the terminal. If Ruby responds with a version number, you’re good to go. If you get an error head over to the [Ruby installation page](https://www.ruby-lang.org/en/documentation/installation/) and grab the correct download for your operating system.

When Ruby installs itself on your machine, it also installs the RubyGems package manager which makes grabbing all your Ruby dependencies a piece of cake.

For our purposes, we’re going to use RubyGems to grab the Jekyll and Bundler gems. If you’d like to learn more about Bundler you can [here](http://bundler.io/rationale.html). All you really need to know it that it’s a dependency manager that will make sure all of the packages we specify in our gem configuration files are properly installed and included in our project. If you’re familiar with Node, using Bundler and its configuration files (called Gemfiles) is roughly equivalent to using npm with a package.json file.

To grab both Jekyll and Bundler, enter the following command:
~~~
gem install jekyll bundler
~~~

Cool stuff. Now that we have our tools setup, we can create a new Jekyll site instance. Type
~~~
jekyll new /path/to/site/(username).github.io
~~~

You can create this bad boy anywhere you’d like, but do make sure the name of the site is _(username).github.io_. We will be using the folder Jekyll creates to initialize our new Github repo for the site.

<div class="post-image-insert">
  <img src="/assets/images/posts/setting-up-blog/jekyll_new_site.png" alt="Jekyll New Site">
  <span>No errors. Woo!</span>
</div>

If you open up the site's base directory in your favorite editor and thumb through the folder structure a bit you can see that there isn’t much to it. By default Jekyll will include its default theme in a separate gem which you are not able to view. You can find more information [here](https://jekyllrb.com/docs/themes/#overriding-theme-defaults) about how exactly that works and how to override it with your own custom stuff. Or if you don’t want to do it yourself, there are already a bunch of people out there who have made [free custom themes for you](https://jekyllthemes.io/).


Alright, after you’ve used jekyll to create your base folder structure, navigate to the location you specified and start your local server with
~~~
bundle exec jekyll serve
~~~
By default, Jekyll will serve the site on port 4000, so if you now open your browser and navigate to ```http://localhost:4000``` you’ll see your site up and running after only a few minutes of setup. Freakin’ sweet.

<div class="post-image-insert">
    <img src="/assets/images/posts/setting-up-blog/serve_it_up.png" alt="Starting Server">
    <img src="/assets/images/posts/setting-up-blog/local_site.png" alt="Local Site">
  <span>It's aliiive! Kinda...</span>
</div>

Before we move on, take a gander at what your folder structure looks like now that we've started the server. 

You might notice a folder called __site_ that wasn't there before. This is where the static files that make up our site live. Jekyll takes the files defined in the structure outside the __site_ folder, compiles them according to both default Jekyll specifications and any custom specifications we’ve made in our __config.yml_ file, and outputs them to the __site_ folder. I won’t go into that much here, but you’ll probably want to [read about it](https://jekyllrb.com/docs/configuration/) at some point. Really just read through that whole Jekyll documentation site. Lots of useful info as you could imagine and it will probably be one of your main resources for customizing your site after we’re done here.

So we've already set up our site locally, but of course that’s only the first half of the battle. Now we gotta get this thing live. Admittedly this is a little trickier than creating the site locally, but no worries, we can do this. Time to move our project to Github.

First we need to make sure we have git installed locally. You can check this the same way you checked to see if Ruby was installed
~~~
git --version
~~~
Again, if this returns a version number, you’re golden. Otherwise go [here](https://www.atlassian.com/git/tutorials/install-git) and follow the installation instructions for your operating system.

Once you have Git installed on your system navigate to the base folder of your Jekyll site and initialize the git repo with 
~~~
git init
~~~
Now there may be a better way to do what I’m trying to accomplish with the following series of commands, but since I’m no git wizard, you’ll just have to bear with my hacks. Once we initialize our repository we can use 
~~~
git status
~~~ 
to see that we are sitting on the master branch with a bunch of untracked files. Normally this is perfectly fine, but since we want to used the master branch to host only the files directly involved in displaying our site (in our case, the __site_ folder) and not ALL of our files, this is a problem. 

Unfortunately, since we just initialized our git repository and haven’t committed anything yet, we are unable to create a new branch, or even rename the branch we are currently on, because technically branches can't exsist before your initial commit. To get around this we will make our initial commit to the default master branch, create a develop branch off of the master branch, and then delete the master branch. To do this, enter the following commands while still in the base folder of your project:

~~~
git add . #add all untracked changes visible from the current folder
git commit -m “some commit message” #commit changes to default master branch
git checkout -b develop #create a develop branch off of the default master branch
git branch -d master #delete default master branch
~~~

But what about our master branch? We still need him so we can display our site using Github Pages right? Correct you are, and we’ll get there, but first we need to go ahead and push our local changes up to Github to make sure our develop branch is tracked remotely. 

Login to Github and create a new repository with the same name as the local copy of your site, _(username).github.io_. Remember, in order for us to use this name in the URL for our site, our repository MUST follow this naming convention. Now, one thing to keep in mind is in order for this site to cost you $0, it must be housed in a public repository. That means it will be open source and the code is publically viewable. This is just our personal blog, though, so who cares?

Protip: if you have sensitive information that you’re not willing to share online and are trying to build a free static website to house that information, you’re doing it wrong. 

Make sure you select the Public option. 

One last thing: DO NOT INITIALIZE IT WITH A README! You’ll screw everything up, jeez. Just create an empty repository for now. Your repo reation screen should look just like mine below.

<div class="post-image-insert">
  <img src="/assets/images/posts/setting-up-blog/create_repo_screen.png" alt="Create Repo Screen">
  <span>So sick...</span>
</div>

Once you click Create Repository, you’ll see the default blank repository screen pop up with instructions on how to add code to your repo. The only one we care about right now is the one that looks like
~~~
git remote add origin https://github.com/(username)/(username).github.io.git
~~~

<div class="post-image-insert">
  <img src="/assets/images/posts/setting-up-blog/remote_link.png" alt="Remote Link">
</div>

Copy and past that guy into your terminal (while still in the base folder of your project) to add your new Github repo as your remote origin for local repo

Now we can just push our changes up, specifying our local dev branch as the new origin target branch:
~~~
git push -u origin develop
~~~
Now if we refresh our Github repo… Well would you look at that, there’s our code. 

<div class="post-image-insert">
  <img src="/assets/images/posts/setting-up-blog/code_in_repo.png" alt="Code in Repo">
</div>

Ok we’re in the homestretch. I know you can practically smell your free website now. Probably smells like solder or something, I don’t know. 

Anyway, now that we’ve got our remote hooked up, the last step that we need to complete is setting up our _master_ branch to track only the __site_ folder of our repository. To do this we’re going to need to use git to set up _master_ as a subtree of our _develop_ branch. Yes I know that’s a little hacky, but I warned you from the start didn’t I? I won’t go into exactly how subtrees work in git, but if you’d like more information you can find it [here](https://www.atlassian.com/blog/git/alternatives-to-git-submodule-git-subtree)

Alright so if you were paying attention when you pushed to Github, you might have been like, "WTF, where'd the all of my compiled files go?" Well right now Git does not know about our __site_ folder because Jekyll adds it to the _.gitignore_ file by default. On your local _develop_ branch go into your _.gitignore_ file and remove the line containing “_site/”. 

And finally, for good measure, make some change to the content of your blog. Like change a couple words in the _about.md_ file or something. Then, start up your local server again if it isn’t still running so that the static files in the __site_ folder are regenerated. Now git will recognize the changes in our __site_ folder and we can add and commit the files to the _develop_ branch just like we did earlier.

~~~
git add .
git commit -m “some commit message”
~~~

After everything has been committed, it’s time for the final command, the big daddy of them all. In order properly create our master branch we need a command that tells git to look at the _site folder as the base for our subtree. Well here you go:
~~~
git subtree push --prefix _site origin master
~~~
This tells git to push a subtree based on our __site_ folder to a remote branch named “master”. If you go back to your Github repo and select the _master_ branch you'll see that it only tracks the contents of the __site_ directory.

<div class="post-image-insert">
  <img src="/assets/images/posts/setting-up-blog/master_branch_files.png" alt="Master Branch Files">
</div>

And just like that, we’re done! Like I said, piece of cake. If you’ve named your repository properly, you should now be able to navigate to _(username).github.io_ in your browser and see your site up and running on the real internet.

<div class="post-image-insert">
  <img src="/assets/images/posts/setting-up-blog/prod_site.png" alt="Prod Site">
  <span>Ok now it's really aliiive!</span>
</div>

If you’d like to make changes to your site going forward, you would follow the same pattern we just outlined. Make changes locally (preferably on a feature branch instead of directly on develop you heathen), merge them into develop, and use that subtree push command to publish to your production site.

Well there you go. In 15 minutes or so, you've used cool tools to set up an easily updatable, (almost) fully customizable blog that can look as sweet as your front end skills will allow. And how much did it cost you to do all that? Exactly $0. Pretty nifty.


