---
title: "‘Version Control System’: Get a Bit “Git” Culture! ! !"
date: 2020-07-10
slug: "version-control-system-get-a-bit-git-culture"
excerpt: "<p>Git is one of the most powerful tools, I feel I have used during my past learnings in the field of programming. It is one open-source tool that I would recommend any person willing to be in program"
categories: ["developer", "development", "programming", "tool"]
tags: ["computer-science", "developer", "developers", "development", "devtool", "git", "github", "version", "version-control"]
author: "shravan20"
url: "http://ohmyscript.com/2020/07/10/version-control-system-get-a-bit-git-culture/"
---

# ‘Version Control System’: Get a Bit “Git” Culture! ! !

**G**it is one of the most powerful tools, I feel I have used during my past learnings in the field of programming. It is one open-source tool that I would recommend any person willing to be in programming or non-programming background profession, to learn. People in the programming field should definitely master the use of this software tool.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/07/c7ded-1qdejjdxa0orhqnkkmjmytg.jpeg)Aren&#8217;t *still* you familiar with Version Control System?

Perks of learning and using Git is infinitely useful and invaluable.

In this article, we will be talking a bit about,

- *Version Control System*
- *Git*
- *Github*

Also discussing other factoids like How Git works and git commands and so on. 

Are you guys ready? Do drop your reviews as well.

Talking about, ***Version Control System (VCS)*** is a tool that is used to keep track and record the changes in the files, by recording/tracking the modification done to that code/any sort of file. It contains all the edits, changes and historical versions as snapshots. It basically doesn't preserve the complete file.
Instead, it preserves the image of the file at that point of time when committed.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/07/de880-1f6expdg4-vx2qftbczzifa.jpeg)*Aye, Aye! Developers will definitely understand!*

There are two types of VCS, namely,
                    ***1)*** ***Centralized VCS                                              2) Distributed VCS***

**Note**: &#8211; Two terms, you will be reading more often, Repositories, Local Repo and Central Repo.
             &#8211; **Repo** is a central place where some sort of data is stored and can be found.

Now, going on with ***Central VCS ***is sort of a system that only contains one repo and each user gets their own working directory. Whatever you commit in your working directory, reflects directly to your central repo.
So basically,
                    &#8211; You change something.
                    &#8211; You commit.
                    &#8211; It reflects your Central Repo.
                    &#8211; These changes reflected in the other User's system as well.

Whereas, in ***Distributed VCS, ***it works sort of differently in this type. Here, every user has their own ***working directory***, i.e., the folder you are working/project exists and owns a ***repository ***called as a ***local repo. ***And another repo called in your central system, called ***Central Repo/Remote Repo.***

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/07/c5860-1g2yes33arslj9jg8uzgulq.png)*CVCS vs DVCS: Which is better??*

Whatever you change, on commit from your working directory will first reflect your local repo. And only once you ***push*** the content from the local repo, it will reflect the Central repo. And that won't affect another user's repo, as he needs to ***pull*** that content to have the same content in that user's local repo and working directory.
So basically,
                    &#8211; You commit the code to your local repo.
                    &#8211; You push the content to your central repo from the local repo.
                    &#8211; The Central repo is updated.
                    &#8211; Other person pulls the code to reflect the same in their local repo.
                    &#8211; Other person's repo updated.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/07/f3700-1ju-x7vzkcnyt7ungdt26qw.png)This is how Git works from your currently working directory to Remote repo and back

I hope this gives you an ample amount of idea about how the ***Version Control System*** works.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/07/14630-1z4ct6r8hrl-jq5i9jawr0a.png)

Jumping into the mains, What are the ***Git*** and ***Github***?

People often misunderstand and have very wrong misconceptions that ***Git*** and ***GitHub*** are one and the same. They are related but are different.

***Git*** is a VCS tool that runs in your system and keeps track of versions of your code/content in your local repo and central repo changes as well on the pull.
Whereas, ***GitHub ***is the service for projects that use Git. In simple terms, GitHub is like a cloud storage system, that preserves the code of different versions; a hosting service for Git repos.

Some alternatives for ***Github*** are:
→  GitLab
→  BitBucket
→  GitBucket
→  SourceForge,&#8230; so on.

Now jumping into simple usage of Git repo in your local with commands and basic terminologies.

What's* a ****commit***?
A ***commit*** is a collection of content, that records changes to the local repo. It creates a new commit containing the new changes/additions.
Example: $git commit -m "some message in some format"

What's a ***Master***?
The default name for the first branch; always reflected for Deployment; expected to hold the stable code only.

What's a ***Branch***?
The pointer to a commit. Basically, if you develop a feature, that can be created in a different branch; since better approach of working with git and also ensures a commit/backup of the code version before this feature is implemented, just in case of some issues. Also, this is the best way to have multiple developers work on parallely on a project.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/07/accidental_merge1.gif?w=500)Visualizing Branching in Git

What's a ***Push***?
Updates a remote branch with the commits made to the current branch in the local branch; in simplest words, pushing the changes in local to the central repo.

What's a ***Merge***?
Taking the changes in one branch and adding them into another branch; usually, the branch that holds the base code. The new commits are usually requested using via "***Pull Request***" before merging them.

*For instance*, say the master branch has content ‘XY'.
Now you and your fellow friend have been asked to develop **feature ‘A' and ‘B'** respectively.
So, you create a branch ‘**featureA**' and implement the code with existing base code ‘XY', ending up with **‘XYA'** code in ‘**featureA' **branch.
Now on pull request and merge, with base Master Branch, it will also have code ‘XYA' code.

Now, wondering ***"Pull Request"*** is?
If someone has changed code on a separate branch of the project and wants to review the code before adding it to the branch having stable code. Then you can put the reviewer in a pull request. Pull requests ask the repo collaborators to review the commits and merge the upstream changes. ***Pull Requests*** happens on the ***GitHub***.

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/07/5e2a15c9b3437b2c33018f6f_1_e1ypr2go9cvgbbqrgub2qw.gif?w=600)Pushing the code from local repo to remote repo

What is "***Clone***"?
A ***clone*** is a process of downloading a complete repo onto your system. Downloads the whole project folder as new content onto the local system with all the commit histories of the project.

What is "***Pull***"?
A "***Pull***" is used to receive data from Github. It basically fetches and merges the changes on the central repo to your local repo and working directory. ***Pull*** happens on the ***Git&lt;local repo&gt;.***

- ![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/07/pull_remote_branch_001.png)Before git pull
- ![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/07/pull_remote_branch_002-1.png)In Local Repo :After git pull

There are so many other jargons related to Git and Github. I wonder, for beginners, these are few things that I know and I hope it helped you get an idea about how Git/VCS works.

There is much more to learn and explore about Git and Github. You can explore several other things. If you want me to write another article about the Git strategies and also about another article about Git modules like Merging, Rebasing, Resetting, Reverting and so on. 

![](https://iamskb258154309.wordpress.com/wp-content/uploads/2020/07/install-github.jpeg?w=600)Github* : A true Developer&#8217;s Social Media Platform*

Drop a comment and share your views.

Please play with Git and Github. That is how you learn about Git's supreme usage.

Utilize the [Visualize Git](https://git-school.github.io/visualizing-git/) tool for seeking more insights.

Stay Tuned for more posts.
Signing off for the day.