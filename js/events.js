states = [
    
        /*
         * I know a lot of people who use git, but few who have taken the time 
         * to really understand it. Instead, they make assumptions about how it 
         * works, and when it doesn't behave in the way those assumptions 
         * suggest, they turn to Google in confusion. Inevitably gravitating to
         * explanations written by other people who have made the same incorrect 
         * assumptions and who provide misleading analogies of how it works. 
         * Ending up with an picture even less clear than when they started.
         * 
         * Eventually the whole thing grows to seem like magic and in the end
         * they just sit at their desk, type the incomprehensible incantations 
         * they found on Stack Overflow, roll a D20, and hit enter. Then they 
         * pray that the git gods will grant their request and not condemn them 
         * to purgatory for their lack of faith.
         * 
         * Arthur C. Clarke, the author of "2001: A Space Odyssey, once said 
         * that "any sufficiently advanced technology is indistinguishable from 
         * magic." I assure you, it's not magic, and over the next three videos
         * we're going to clear away the smoke and mirrors, peel back the
         * misdirection on the internet and expose exactly how the trick works.
         * 
         * This is an interactive presentation, and in order to get the most
         * out of it, I highly recommend you participate at home.
         * 
         * Before we get started, let's take a moment to get you prepared:
         * 
         * To completely play along, you'll need a few props:
         * 1.  54 playing cards
         *       *  You can make your own deck as we go with a blank deck of 
         *          playing cards, or even a pack of index cards will do the job
         *       *  You can download a PDF of the cards used in the
         *          presentation, print and cut them out
         *       *  or you can follow the link below to learn more about getting
         *          pre-printed decks
         * 2.  1-2 Markers
         * 3.  PostIt notes
         * 
         * Go ahead and hit pause and get what you need, I'll be here when you
         * get back. During the presentation keep your mouse on the pause button. 
         * Trying to guess how much time is needed as you play at home would 
         * only result in most users either having dead space or having to pause 
         * the video anyway. So if you need to pause, need to rewind, or just 
         * get sick of hearing my voice and need a break, take as much time as
         * you need.
         */
        {"object":"logo","time":0,"toggle":"hidden"},

        /*
         * Slide 1
         * 
         * So, what is git?
         * 
         * I'm going to sum git up in a single sentence, please don't turn this 
         * off after hearing this, I promise that if you play the at home
         * version of the game, by the time we're done, you'll understand
         * every concept in the next sentence.
         * 
         */
        {"object":"slide.background","time":0,"toggle":"hidden"},
        {"object":"#slide1","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 1.1
         * 
         * Git is a version control system designed to track the history
         * of text files across multiple distributed instances, without 
         * the need for constant communication between instances, by 
         * representing files, their relationships, and their history as
         * complete, raw data blobs stored in a compressed database 
         * indexed by statically unique, content-based, pseudo-random
         * hashes and whose entire history and content can be accessed,
         * from any arbitrary starting point, by means of the recursive
         * traversal of its node space, which is best represented in the
         * form of a directed acyclic graph mapped, along with its
         * content in four dimensions.
         */
        {"object":"#slide1 p","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide1","time":0,"toggle":"hidden"},

        /*
         * Slide 2
         */
        {"object":"#slide2","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 2.1
         * 
         * The earliest version control systems were a necessary step, but were
         * so primitive that they can barely be considered in the same family
         * as more modern system. They allowed tracking of files on only one
         * computer, and often only one file at a time.
         * 
         * Each generation eventually had a system come out on top, to the point
         * that it essentially defined the generation
         * 
         */
        {"object":"#slide2 .show1","time":0,"toggle":"hidden"},
        {"object":"#slide2 .show2","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 2.2
         * 
         * The first generation of modern version control was the Concurrent 
         * Versioning System or CVS. It was server based, which made it a tool 
         * that could be used by teams, but major features like branching were 
         * very difficult to do and as a result, usually were ignored all 
         * together.
         * 
         */
        {"object":"#slide2 .show3","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 2.3
         * 
         * Mostly because people were fed up with using CVS. Subversion was 
         * created as a replacement. Billed as "CVS Done Right" it was largely
         * modelled after CVS in how it did things, for example, both systems 
         * were centralized on a server. Without an active network connection
         * it was impossible to commit.
         * 
         * While easier, branching was still expensive, somewhat difficult to 
         * manage, and problematic to merge. Again, most teams just didn't want 
         * to deal with it and developed on a single branch.
         * 
         */
        {"object":"#slide2 .show4","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 2.4
         * 
         * The current generation of version control went back to the drawing 
         * board and attempted to build a more modern system that would work for 
         * the new realities of development.
         * 
         * Git and Mercurial are the two open source system in this generation.
         * While they function very differently in their specifics, they are
         * in fact very similar in their operation. 
         * 
         * Both are distributed systems, so while there can be a central server,
         * repositories are cloned locally and users can interact with them
         * without the need for an active network connection. This fact alone 
         * makes this generation much better suited to the work anywhere nature
         * of the modern development team.
         * 
         */
        {"object":"#slide2 .show5","time":0,"toggle":"hidden"},
        {"object":"#slide2 .show6","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide2","time":0,"toggle":"hidden"},

        /*
         * Slide 3
         */
        {"object":"#slide3","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 3.1
         * 
         * Git was released in 2005
         */
        {"object":"#slide3 .show1","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 3.2
         * 
         * It was originally written by Linus Torvolds to manage the Linux 
         * Kernel project
         */
        {"object":"#slide3 .show2","time":0,"toggle":"hidden"},
        {"object":"#slide3 .show3","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide3","time":0,"toggle":"hidden"},

        /*
         * Slide 4
         * 
         * Even after ten years of use, git still seems to be very confusing for
         * a lot of people, and there are several reasons.
         * 
         * First, people who understand how it works tend to use a lot of fancy 
         * computer-sciency terms when talking about it. And while they are 
         * accurate, it really only means something to you if you already know
         * what those terms mean.
         */
        {"object":"#slide4","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.1
         * 
         * Things like "Directed Acyclic Graph"
         */
        {"object":"#slide4 .show1","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.2
         * 
         * Or "Recursive Traversal of the Node space"
         */
        {"object":"#slide4 .show2","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.3
         * 
         * It's also very difficult to diagram a git repo in a way that
         * isn't misleading.
         */
        {"object":"#slide4 .show3","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.4
         * 
         * There is a lot of incorrect information about git floating around. 
         * Most of it is harmless and won't hurt you in learning how to use git
         * but in order to really leverage git you need to understand how it 
         * thinks.
         */
        {"object":"#slide4 .show4","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.5
         * 
         * Its distributed structure takes some getting used to, especially when
         * you are used to older centralized systems.
         */
        {"object":"#slide4 .show5","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.6
         * 
         * A lot of that misinformation and difficulty comes from trying to 
         * compare git to systems you already know. A lot of the commands are
         * similar to older systems, and many people incorrectly apply their
         * understanding of CVS or Subversion to git, which will eventually
         * cause them headaches.
         */
        {"object":"#slide4 .show6","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.8
         * 
         * Because if its distributed nature, you'll frequently have multiple 
         * versions of the same branch. One referencing your state and others
         * representing the state of that branch on copies of the repo in other
         * locations
         */
        {"object":"#slide4 .show8","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.9
         * 
         * A legitimate difficulty is that git tends to value speed over ease
         * of use
         */
        {"object":"#slide4 .show9","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.10
         * 
         * As a result, the command line syntax can often get a bit wobbly, but
         * as you learn how git works, a lot of it will make more sense.
         */
        {"object":"#slide4 .show10","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4","time":0,"toggle":"hidden"},

        /*
         * Slide 5
         * 
         * Every object in git is given a hash to identify it in the database
         */
        {"object":"#slide5","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 5.1
         * 
         * Git uses a SHA1 hash
         */
        {"object":"#slide5 .show1","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 5.2
         * 
         * It generates its hash based on the content of the file
         */
        {"object":"#slide5 .show2","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 5.3
         * 
         * SHA1 is a waterfall hash, so a single bit changed anywhere in the
         * file drastically alters the final hash
         */
        {"object":"#slide5 .show3","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 5.4
         * 
         * The hashes produced follow no known patterns even though they are 
         * based on content.
         */
        {"object":"#slide5 .show4","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 5.5
         * 
         * Hashes are statistically unique, meaning that the probability of the
         * same hash being generated for two files is so astronomical that it 
         * isn't even worth considering
         */
        {"object":"#slide5 .show5","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 5.6
         * 
         * SHA1 produces a 160 bit hash, meaning that there are 2^160 possible
         * hashes
         */
        {"object":"#slide5 .show6","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 5.7
         * 
         * That's big, REALLY big
         */
        {"object":"#slide5 .show7","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 5.8
         * 
         * Imagine we were to write each hash value on a standard poker size 
         * playing card and make them into a deck.
         * 
         */ 
        {"object":"#slide5 .show8","time":0,"toggle":"hidden"},
        {"pause":""},
        /* 
         * 
         * It's hard to express how big it is, but we'll try. Our galaxy is 
         * 100,000 light years across and a little over 1000 light years thick. 
         * A light year is a little under 6 billion miles or 9.5 billion 
         * kilometers. 
         */ 
        {"object":"#slide5 .show9","time":0,"toggle":"hidden"},
        {"pause":""},
        /* 
         * Our imaginary deck would cover the galactic disc and be 
         * stacked over 4000 light years high. 
         * 
         * This deck of cards would require the matter of over 1 million milky-
         * way sized galaxies to manufacture. And it would promptly collapse 
         * into a black hole that would wipe out all life.
         * 
         * Slide 5.9
         * 
         * For simplicity, and safety, we've compressed the hash space for this
         * presentation to fit a normal 54 card deck.
         * 
         * So grab your deck and your markers, we're going to build a git repo 
         * that exists in the real world, made out of familiar objects that you 
         * can hold in your hands and manipulate on the table in front of you
         * instead of in some abstract virtual space.
         */
        {"object":"#slide5 .show10","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide5","time":0,"toggle":"hidden"},
        {"object":"slide.background","time":0,"toggle":"hidden"},		
        {"pause":""},
		
		
        /* 
         * First Commit
         * 
         * The first thing we'll need is a new repo, so we'll initialize it. 
         * A lot of stuff is going on here, but essentially we're setting up the
         * database for the project.
         */
        {"object":".deck","time":0,"toggle":"hidden"},
        {"pause":""},
        /* 
         * Now let's copy our files into the working folder and add them to the 
         * index. The git index is a holding area where you build the contents 
         * of a commit before actually committing it.
         */
        {"object":"tree","time":0,"toggle":"hidden"},
        {"pause":""},
        /* 
         * Create foo blob
         * 
         * Git doesn't really care about the contents of your files, all files 
         * are just considered a data blob.
         */
        {"object":".d-j","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        /* 
         * When we add it to the index, the file's contents are hashed, and it's
         * stored in the database under that value. Git represents the hash as 
         * a 40 character string. Here we're going to use their card values. So 
         * the foo file hashes to the Jack of Diamonds
         */
        {"object":".d-j","time":0,"toggle":"nopip"},
        {"pause":""},
        /* 
         * We'll put the file over here for now and move on
         */
        {"object":".d-j","time":0,"toggle":"front center position1-5"},
        {"pause":""},
        /* 
         * Create bar blob
         * 
         * Now we'll take the bar blob
         */
        {"object":".c-5","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        /* 
         * Hash it to the 5 of Clubs
         */
        {"object":".c-5","time":0,"toggle":"nopip"},
        {"pause":""},
        /* 
         * And set it aside
         */
        {"object":".c-5","time":0,"toggle":"front center position2-5"},
        {"pause":""},
        /* 
         * Create baz blob
         * 
         * Baz will be treated the same way, hashing to the seven of clubs
         */
        {"object":".c-7","time":0,"toggle":"offscreen front center"},
        {"object":".c-7","time":500,"toggle":"nopip"},
        {"object":".c-7","time":500,"toggle":"front center position3-4"},
        {"pause":""},
        /* 
         * Create fiz blob
         * 
         * Right now, we've got data ready to go into our repo, but nothing
         * to indicate how all this goes together, we we're going to need
         * to create a tree object.
         */
        {"object":".line2-4-to-1-5","time":0,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".s-9","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        /* 
         * To do this, we're going to record three pieces of information for
         * each object. The object's name, it's hash, and what type of object it
         * is.
         */
        {"object":".s-9","time":0,"toggle":"nopip"},
        {"pause":""},
        /* 
         * We'll create a new text file with this information, hash it based on 
         * its content, and store it in the database as well
         */
        {"object":".s-9","time":0,"toggle":"front center position2-4"},
        {"pause":""},
          /* 
         * Create settings
         * 
         * Moving up the line, we'll build the next level of the tree. It 
         * references the tree and blob below it.
         */
        {"object":".line2-3-to-2-4","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},
        {"object":".h-6","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        /* 
         * Hash it
         */
        {"object":".h-6","time":0,"toggle":"nopip"},
        {"pause":""},
        /* 
         * And drop it into the index
         * 
         * I'd like to point out a couple of things now, notice that each object in
         * the tree is hashed based on its content. As previously stated, a
         * sha1 hash will change if a single bit is altered anywhere in the
         * file.
         * 
         * The practical upshot of this is that if any bit in any of the files 
         * change, or if a file is renamed, those changes will cascade up because
         * each level contains a reference in its text to the next level down.
         */
        {"object":".h-6","time":0,"toggle":"front center position2-3"},
        {"pause":""},
        /* 
         * Because the hashes are statistically unique, we can look at any node
         * and if its hash is unchanged, we can be certain that not only its 
         * contents are unchanged, but also all of its children are unchanged.
         * 
         * We'll be working exclusively in the settings folder, so  while in a 
         * real git repo, all if the contents of the app folder would be added
         * just like the settings folder, for our purposes the only thing we 
         * need to know about the app folder is that it's the 2 of diamonds. 
         * It could contain 3 files or 3 million, and because it remains 
         * unchanged, we're safe for everything we'll be doing.
         * 
         * This is one of the features that makes comparing trees in git so
         * fast.
         */
        {"object":".d-2","time":0,"toggle":"offscreen front center"},
        {"object":".d-2","time":500,"toggle":"nopip"},
        {"object":".d-2","time":500,"toggle":"front center position1-3"},
        {"pause":""},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        /* 
         * Create the root
         * 
         * We're up to the root so we'll create the top level of the tree and
         * get ready to commit our code.
         */
        {"object":"tree","time":0,"toggle":"hidden"},
        {"object":".c-8","time":200,"toggle":"offscreen front center"},
        {"object":".c-8","time":500,"toggle":"nopip"},
        {"object":".c-8","time":500,"toggle":"front center position1-2"},
        {"pause":""},
        /* 
         * Make the commit
         * 
         * Now that all our data is stored in the index and our tree is ready
         * we're ready to make a commit, which means we'll need to put a few
         * pieces of information into our commit file.
         * 
         * First we need a commit message, in this case "Initial commit"
         * 
         * Second we need the author of the commit, we'll reference them
         * by their name and email address. In a real repo, we'd store the date 
         * and time of the commit as well and you have the option of specifying 
         * both an author and a committer, but we'll simplify here
         * 
         * Third we need to reference the tree object that represents our index
         * 
         * And finally the commit's parents, the first commit of the repo will
         * be the only one without parents.
         */
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".h-q","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        /*
         * This file, too, will be hashed and stored in the database
         */
        {"object":".h-q","time":0,"toggle":"nopip"},
        {"object":".h-q","time":500,"toggle":"front center position1-1"},
        {"pause":""},
        /*
         * We're almost done, but right now, there is nothing to tell us which 
         * of the objects in the database is our commit, or which commit is 
         * current when there are more than one.
         */
        {"object":".master","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        /*
         * To solve this problem, we'll need to create a branch. Our default
         * branch is called "Master"
         */
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-q-h"},
        {"object":".master .pip","time":200,"toggle":"hidden"},
        {"pause":""},
        /*
         * A branch is just a special file in the database which contains only 
         * the 40 character hash of the commit at the HEAD of the branch.
         * 
         * Use a post it note to mark the head of the branch on a branch card.
         */
        {"object":".master","time":0,"toggle":"front center position4-5"},
        {"pause":""},
        
        /*
         * Now that we've officially got data in our repo, it's time to leverage
         * the version part of the version control system, so we're going to 
         * need to make some changes.
         * 
         * Let's make a change in the file "baz." As we've already discussed,
         * git always stores files as complete blobs and it doesn't really care
         * about their contents until you need to compare it to something
         */
        {"object":".c-7","time":300,"toggle":"position3-4"},
        {"object":".d-5","time":300,"toggle":"offscreen front center"},
        {"pause":""},
        /*
         * So let's add it to the index, which will hash the file as the 5 of 
         * diamonds
         */
        {"object":".d-5","time":0,"toggle":"nopip"},
        {"pause":""},
        /*
         * Because the hash of the file has changed, all of the tree objects
         * that reference it are now invalid, so they will need to be updated 
         * and recalculated
         */
        {"object":".d-5","time":0,"toggle":"front center position3-4"},
        {"object":".ph2-3","time":300,"toggle":"changed"},
        {"object":".ph1-2","time":300,"toggle":"changed"},
        {"object":".ph1-1","time":300,"toggle":"changed"},
        {"pause":""},
        /*
         * We'll work our way up the tree to the root and update the contents of
         * the index as needed
         */        
        {"object":".h-6","time":0,"toggle":"position2-3"},
        {"object":".d-q","time":300,"toggle":"offscreen position2-3"},
        {"object":".d-q","time":500,"toggle":"nopip"},
        {"object":".ph2-3","time":500,"toggle":"changed unchanged"},
        {"object":".c-8","time":0,"toggle":"position1-2"},
        {"object":".c-9","time":300,"toggle":"offscreen position1-2"},
        {"object":".c-9","time":500,"toggle":"nopip"},
        {"object":".ph1-2","time":500,"toggle":"changed unchanged"},
        {"pause":""},
        /*
         * Finally, once we've crafted our commit in the index, we're ready to
         * commit. The only real difference here is that our new commit is being
         * made on the master branch, so the current head of the branch, the 
         * queen of diamonds, will be referenced as the parent of this commit.
         */                
        {"object":".h-q","time":0,"toggle":"position1-1"},
        {"object":".s-4","time":300,"toggle":"offscreen position1-1"},
        {"pause":""},
        /*
         * These parent references are what allow git to track the history of
         * a commit, and by extension, a branch.
         */                
        {"object":".s-4","time":0,"toggle":"nopip"},
        {"object":".ph1-1","time":500,"toggle":"changed unchanged"},
        {"pause":""},
        /*
         * And finally, we'll need to update our branch to point to the new
         * commit.
         */                        
        {"object":".ph1-1","time":0,"toggle":"unchanged"},        
        {"object":".ph1-2","time":0,"toggle":"unchanged"},
        {"object":".ph2-3","time":0,"toggle":"unchanged"},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-q-h pip-4-s"},
        {"object":".master .pip","time":200,"toggle":"hidden"},
        {"pause":""},
        /*
         * Because of this simple reference system, we can start from the head
         * of a branch and by reading its parent and its parents parent and so
         * on we can very quickly reconstruct the history of the branch.
         * 
         * Reconstruction of a branch is so fast and easy, that git doesn't even
         * need to store explicit branch information. The one 40 character hash
         * reference in the branch file is all it takes.
         * 
         * This is what people are talking about when they say that branching in
         * git is very cheap. Creating a new branch only adds 41 bytes to your
         * total repo size.
         */
        {"object":".c-9","time":0,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":25,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-2","time":25,"toggle":"position1-3"},
        {"object":".d-q","time":25,"toggle":"position2-3"},
        {"object":".line2-3-to-2-4","time":25,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".s-9","time":25,"toggle":"position2-4"},
        {"object":".d-5","time":25,"toggle":"position3-4"},
        {"object":".line2-4-to-1-5","time":25,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".d-j","time":25,"toggle":"position1-5"},
        {"object":".c-5","time":25,"toggle":"position2-5"},
        
        {"object":".h-q","time":100,"toggle":"position1-1"},
        {"object":".s-4","time":100,"toggle":"position1-1 position1-2"},
        {"object":".line1-1-to-1-2","time":100,"toggle":"hidden"},
        /*
         * So far, it's just one person working on a single instance of the 
         * repo, but git is a distributed system that really shines for teams, 
         * so let's move over to one of Derrial's team mates' computers for a 
         * moment.
         * 
         * If you're playing at home, you'll be playing Kaylee for the time-being
         */        
        {"pause":""},
        {"object":".h-q","time":0,"toggle":"hidden"},
        {"object":".s-4","time":0,"toggle":"hidden"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".master","time":0,"toggle":"hidden"},
        {"object":"body","time":0,"toggle":"klee"},

        /*
         * Kaylee clones the repo
         * 
         * At the moment, you don't have anything in your repo, so you'll need
         * to get a copy of the repo so you can start work. To do this you'll 
         * clone the repo from another member of the team. In this case, Derrial
         */
        
        {"pause":""},
        {"object":".h-q","time":0,"toggle":"hidden"},
        {"object":".s-4","time":0,"toggle":"hidden"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".master","time":0,"toggle":"hidden"},
        {"object":"body","time":0,"toggle":"klee"},

        /*
         * When Kaylee clones the repo, the source repo is going to pack up all
         * the active objects in it's deck and package them.
         * 
         * To accomplish this, it's going to start at the head of each branch
         * and build out the tree, building a manifest of objects.
         */
        {"pause":""},
        {"object":".s-4","time":100,"toggle":"position1-2 position1-1"},
        {"object":".h-q","time":100,"toggle":"position1-1"},
        {"object":".c-9","time":100,"toggle":"position1-2"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-2","time":100,"toggle":"position1-3"},
        {"object":".d-q","time":100,"toggle":"position2-3"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".s-9","time":100,"toggle":"position2-4"},
        {"object":".d-5","time":100,"toggle":"position3-4"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".d-j","time":100,"toggle":"position1-5"},
        {"object":".c-5","time":100,"toggle":"position2-5"},       

        /*
         * Then it will work its way backwards through the history until it
         * reaches that initial commit.
         */
        {"pause":""},
        {"object":".s-4","time":100,"toggle":"position1-1 position2-1"},
        {"object":".h-q","time":0,"toggle":"position1-1"},
        {"object":".c-9","time":100,"toggle":"position1-2 position2-1"},
        {"object":".c-8","time":0,"toggle":"position1-2"},
        {"object":".d-q","time":100,"toggle":"position2-3 position2-1"},
        {"object":".h-6","time":0,"toggle":"position2-3"},
        {"object":".d-5","time":100,"toggle":"position3-4 position2-1"},
        {"object":".c-7","time":0,"toggle":"position3-4"},

        {"pause":""},
        {"object":".h-q","time":100,"toggle":"position1-1 position2-1"},
        {"object":".c-8","time":100,"toggle":"position1-2 position2-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-2","time":100,"toggle":"position1-3 position2-1"},
        {"object":".h-6","time":100,"toggle":"position2-3 position2-1"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".s-9","time":100,"toggle":"position2-4 position2-1"},
        {"object":".c-7","time":100,"toggle":"position3-4 position2-1"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".d-j","time":100,"toggle":"position1-5 position2-1"},
        {"object":".c-5","time":100,"toggle":"position2-5 position2-1"},

        /*
         * Once the manifest is built, it will package it up and send it.
         */
        {"pause":""},
        {"object":"body","time":0,"toggle":"klee"},
        {"object":".master","time":0,"toggle":"hidden"},

        /*
         * Kaylee will then add all those objects to her deck.
         */
        {"pause":""},
        {"object":".d-q","time":100,"toggle":"position2-1"},
        {"object":".d-j","time":100,"toggle":"position2-1"},
        {"object":".d-5","time":100,"toggle":"position2-1"},
        {"object":".d-2","time":100,"toggle":"position2-1"},
        {"object":".c-9","time":100,"toggle":"position2-1"},
        {"object":".c-8","time":100,"toggle":"position2-1"},
        {"object":".c-7","time":100,"toggle":"position2-1"},
        {"object":".c-5","time":100,"toggle":"position2-1"},
        {"object":".h-q","time":100,"toggle":"position2-1"},
        {"object":".h-6","time":100,"toggle":"position2-1"},
        {"object":".s-9","time":100,"toggle":"position2-1"},
        {"object":".s-4","time":100,"toggle":"position2-1"},

        /*
         * The repo will also send references like branches and tags. Branches
         * will be specified as belonging to the original repo, by default
         * origin.
         */
        {"pause":""},
        {"object":".origin","time":0,"toggle":"nopip offscreen position4-4"},
        
        {"pause":""},        
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":500,"toggle":"pip-4-s"},
        {"object":".origin .pip","time":200,"toggle":"hidden"},

        /*
         * Kaylee will need a safe place to work, so a local master branch is
         * created and a marker is added internally so git knows to relate it
         * to the master branch on its origin.
         */
        {"pause":""},
        {"object":".master","time":0,"toggle":"hidden"},
        
        /*
         * Kaylee is free to start working, but for the moment, let's move back
         * to Derrial's repo and do a little more work.
         */
        {"pause":""},
        {"object":"body","time":0,"toggle":"klee"},
        {"object":".origin","time":0,"toggle":"hidden"},

        /*
         * Create a branch
         */

        {"object":".h-q","time":100,"toggle":"position1-1"},
        {"object":".s-4","time":100,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":100,"toggle":"hidden"},

        /*
         * Before we do work, we want to make sure that work is safe. We don't
         * want to do things directly on master because we don't want to risk 
         * sending untested code to other users. We'll need to create a branch 
         * to hold this new work, so let's create a branch and call it "feature."
         */
        {"pause":""},
        {"object":".feature","time":0,"toggle":"nopip offscreen position4-4"},

        /*
         * When we create a branch, it is created at a specific commit, in this
         * case the head of master, the 4 of spades.
         */
        {"pause":""},        
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        /*
         * Derrial adds a method to the baz class
         */
        {"pause":""},        
        {"object":".s-k","time":0,"toggle":"offscreen front center"},

        /*
         * Add
         */
        {"pause":""},        
        {"object":".s-k","time":0,"toggle":"nopip"},

        /*
         * And commit
         */
        {"pause":""},        
        {"object":".s-k","time":0,"toggle":"front center position1-3"},
        {"object":".line1-2-to-1-3","time":100,"toggle":"hidden"},

        /*
         * Because we're working on the feature branch, its reference is updated
         * instead of master.
         * 
         * Set these cards aside, we'll need them later, but don't add them to 
         * your deck just yet because Kaylee hasn't fetched from Derrial.
         */
        {"pause":""},        
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-k-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        /*
         * Next he adds a property to the class
         */
        {"pause":""},
        {"object":".h-q","time":100,"toggle":"position1-1"},
        {"object":".s-4","time":100,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".s-k","time":100,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},

        {"object":".d-6","time":100,"toggle":"offscreen position1-1"},
        {"object":".d-10","time":100,"toggle":"offscreen position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-2","time":100,"toggle":"position1-3"},
        {"object":".s-2","time":100,"toggle":"offscreen position2-3"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".s-9","time":100,"toggle":"position2-4"},
        {"object":".d-8","time":100,"toggle":"offscreen position3-4"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".d-j","time":100,"toggle":"position1-5"},
        {"object":".c-5","time":100,"toggle":"position2-5"},       

        {"object":".ph3-4","time":300,"toggle":"changed"},
        {"object":".ph2-3","time":300,"toggle":"changed"},
        {"object":".ph1-2","time":300,"toggle":"changed"},
        {"object":".ph1-1","time":300,"toggle":"changed"},

        {"object":".d-8","time":100,"toggle":"nopip"},
        {"object":".ph3-4","time":300,"toggle":"changed unchanged"},
        {"object":".s-2","time":100,"toggle":"nopip"},
        {"object":".ph2-3","time":300,"toggle":"changed unchanged"},
        {"object":".d-10","time":100,"toggle":"nopip"},
        {"object":".ph1-2","time":300,"toggle":"changed unchanged"},
        {"object":".d-6","time":100,"toggle":"nopip"},
        {"object":".ph1-1","time":300,"toggle":"changed unchanged"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-k-s pip-6-d"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        /*
         * Let's take a look at the history of the project now
         */
        {"pause":""},
        {"object":".ph3-4","time":0,"toggle":"unchanged"},
        {"object":".ph2-3","time":0,"toggle":"unchanged"},
        {"object":".ph1-2","time":0,"toggle":"unchanged"},
        {"object":".ph1-1","time":0,"toggle":"unchanged"},
    
        {"object":".d-6","time":100,"toggle":"position1-1"},
        {"object":".d-10","time":100,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-2","time":100,"toggle":"position1-3"},
        {"object":".s-2","time":100,"toggle":"position2-3"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".s-9","time":100,"toggle":"position2-4"},
        {"object":".d-8","time":100,"toggle":"position3-4"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".d-j","time":100,"toggle":"position1-5"},
        {"object":".c-5","time":100,"toggle":"position2-5"},       
        
        {"object":".h-q","time":100,"toggle":"position1-1"},
        {"object":".s-4","time":100,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".s-k","time":100,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".d-6","time":100,"toggle":"position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},

        /*
         * Merge branch into master (fast forward)
         * 
         * Once the changes to baz on feature are tested, Derrial is ready to 
         * merge it into the master branch.
         * 
         * So let's check out the master branch and merge the feature branch
         * into it.
         * 
         * Git will perform one of the two most common types of merges. A Fast-
         * Forward merge. It uses this strategy when the head of the current 
         * branch is a direct ancestor of the branch being merged in. There 
         * isn't even a need to look at the contents of the commits, we know
         * that there can be no conflicts, so we'll just update the head of the
         * master branch to the same commit as the incoming branch.
         */

        {"pause":""},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-4-s pip-6-d"},
        {"object":".master .pip","time":200,"toggle":"hidden"},

        /*
         * While Derrial has been making his changes, Kaylee is also working
         * over in her repo.
         */
        {"pause":""},
        {"object":".s-k","time":100,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".d-6","time":100,"toggle":"position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":"body","time":200,"toggle":"klee"},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-4-s pip-6-d"},
        {"object":".feature .pip","time":0,"toggle":"pip-6-d"},
        {"object":".master .pip","time":200,"toggle":"hidden"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature","time":0,"toggle":"hidden"},
        {"object":".origin","time":0,"toggle":"hidden"},

        /*
         * She creates a branch and starts to work on the foo class. 
         * 
         * Go ahead and add these cards to your deck as she works.
         * 
         * She adds a method to foo.
         */
        {"pause":""},        
        {"object":".feature","time":300,"toggle":"hidden position4-4 position4-3"},
		
        {"pause":""},        
        {"object":".s-10","time":300,"toggle":"offscreen front center"},

        {"object":".s-10","time":300,"toggle":"nopip"},

        {"object":".s-10","time":300,"toggle":"front center position1-3"},
        {"object":".line1-2-to-1-3","time":100,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-s pip-10-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},
    
        /*
         * Then adds a property.
         */
        {"pause":""},
        {"object":".s-q","time":300,"toggle":"offscreen front center"},

        {"object":".s-q","time":300,"toggle":"nopip"},

        {"object":".s-q","time":300,"toggle":"front center position1-4"},
        {"object":".line1-3-to-1-4","time":100,"toggle":"hidden"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-10-s pip-q-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        /*
         * And finally updates a constant
         */
        {"pause":""},
        {"object":".h-q","time":100,"toggle":"position1-1"},
        {"object":".s-4","time":100,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".s-10","time":100,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".s-q","time":100,"toggle":"position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},

        {"object":".c-a","time":100,"toggle":"offscreen position1-1"},
        {"object":".s-6","time":100,"toggle":"offscreen position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-2","time":100,"toggle":"position1-3"},
        {"object":".d-9","time":100,"toggle":"offscreen position2-3"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".h-3","time":100,"toggle":"offscreen position2-4"},
        {"object":".d-5","time":100,"toggle":"position3-4"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".h-10","time":100,"toggle":"offscreen position1-5"},
        {"object":".c-5","time":100,"toggle":"position2-5"},       

        {"object":".ph1-5","time":300,"toggle":"changed"},
        {"object":".ph2-4","time":300,"toggle":"changed"},
        {"object":".ph2-3","time":300,"toggle":"changed"},
        {"object":".ph1-2","time":300,"toggle":"changed"},
        {"object":".ph1-1","time":300,"toggle":"changed"},

        {"object":".h-10","time":100,"toggle":"nopip"},
        {"object":".ph1-5","time":300,"toggle":"changed unchanged"},
        {"object":".h-3","time":100,"toggle":"nopip"},
        {"object":".ph2-4","time":300,"toggle":"changed unchanged"},
        {"object":".d-9","time":100,"toggle":"nopip"},
        {"object":".ph2-3","time":300,"toggle":"changed unchanged"},
        {"object":".s-6","time":100,"toggle":"nopip"},
        {"object":".ph1-2","time":300,"toggle":"changed unchanged"},
        {"object":".c-a","time":100,"toggle":"nopip"},
        {"object":".ph1-1","time":300,"toggle":"changed unchanged"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-q-s pip-a-c"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        /*
         * Once she's tested everything, she's ready to merge her new feature
         * into master.
         */
        {"pause":""},
        {"object":".ph1-5","time":0,"toggle":"unchanged"},
        {"object":".ph2-4","time":0,"toggle":"unchanged"},
        {"object":".ph2-3","time":0,"toggle":"unchanged"},
        {"object":".ph1-2","time":0,"toggle":"unchanged"},
        {"object":".ph1-1","time":0,"toggle":"unchanged"},
        
        {"object":".s-6","time":100,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-2","time":100,"toggle":"position1-3"},
        {"object":".d-9","time":100,"toggle":"position2-3"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".h-3","time":100,"toggle":"position2-4"},
        {"object":".d-5","time":100,"toggle":"position3-4"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".h-10","time":100,"toggle":"position1-5"},
        {"object":".c-5","time":100,"toggle":"position2-5"},  

        {"object":".c-a","time":100,"toggle":"position1-1 position1-5"},
        {"object":".h-q","time":100,"toggle":"position1-1"},
        {"object":".s-4","time":100,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".s-10","time":100,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".s-q","time":100,"toggle":"position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":".line1-4-to-1-5","time":0,"toggle":"hidden"},

        /*
         * Before she merges, she wants to make sure she has the latest copy
         * of the master branch, so she fetches from Derrial's repo again.
         * 
         * All the new objects that Derrial added are now added to her repo and
         * her remote reference to master is updated. At this point you can add 
         * those cards we set aside to your deck.
         */
        {"pause":""},
        {"object":".s-k","time":100,"toggle":"position2-3"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-6","time":100,"toggle":"position2-4"},
        {"object":".line2-3-to-2-4","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":500,"toggle":"pip-4-s pip-6-d"},
        {"object":".origin .pip","time":200,"toggle":"hidden"},

        /*
         * Initiate a 3-way merge
         * 
         * Now knowing that Derrial has made changes to the master branch, it's
         * a good idea for Kaylee to merge the master branch into her branch to
         * test before committing it to master.
         * 
         * From her feature branch, she's going to merge in the origin version
         * of the master branch.
         * 
         * Because the six of diamonds is not a direct ancestor of the ace of 
         * clubs, this is going to use the other common strategy, the 
         * three-way merge.
         * 
         * It's called a three way merge because git is going to use three 
         * points on the tree as the basis for the merge.
         * 
         * The head of the source branch
         */
        {"pause":""},
        {"object":".ph2-4","time":0,"toggle":"unchanged"},    
        /*
         * The head of the destination branch
         */
        {"pause":""},
        {"object":".ph1-5","time":0,"toggle":"unchanged"},    
        /*
         * And their closest common ancestor, called the merge-base
         */
        {"pause":""},
        {"object":".ph1-2","time":0,"toggle":"unchanged"},    

        {"pause":""},
        {"object":".h-q","time":0,"toggle":"position1-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".s-10","time":0,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".s-q","time":0,"toggle":"position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":".line1-4-to-1-5","time":0,"toggle":"hidden"},
        {"object":".s-k","time":0,"toggle":"position2-3"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-2-4","time":0,"toggle":"hidden"},
        
        /*
         * To perform the merge, we'll need to find the difference between the 
         * three points
         */
        {"pause":""},
        {"object":".ph1-2","time":0,"toggle":"unchanged"},    
        {"object":".s-4","time":0,"toggle":"position1-2 position1-1"},
        {"object":".ph2-4","time":0,"toggle":"unchanged"},    
        {"object":".d-6","time":0,"toggle":"position2-4 position3-5"},
        {"object":".ph1-5","time":0,"toggle":"unchanged"},    
        {"object":".c-a","time":0,"toggle":"position1-5 position3-5"},

        /*
         * We start with the tree at the merge base.
         */
        {"pause":""},
        {"object":".c-9","time":300,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".d-2","time":300,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-q","time":300,"toggle":"position2-3"},
        {"object":".s-9","time":300,"toggle":"position2-4"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".d-5","time":300,"toggle":"position3-4"},
        {"object":".d-j","time":300,"toggle":"position1-5"},
        {"object":".c-5","time":300,"toggle":"position2-5"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},

        /*
         * Then we'll look at the destination branch and calculate the diff
         * here we've marked modified objects in yellow.
         */
        {"pause":""},
        {"object":".s-4","time":0,"toggle":"position1-1"},
        {"object":".c-a","time":0,"toggle":"position1-1 position3-5"},
        {"object":".ph1-1","time":0,"toggle":"changed"},
        {"object":".c-9","time":300,"toggle":"position1-2"},
        {"object":".s-6","time":0,"toggle":"position1-2"},
        {"object":".ph1-2","time":0,"toggle":"changed"},    
        {"object":".ph1-3","time":0,"toggle":"unchanged"},    
        {"object":".d-q","time":300,"toggle":"position2-3"},
        {"object":".d-9","time":0,"toggle":"position2-3"},
        {"object":".ph2-3","time":0,"toggle":"changed"},    
        {"object":".s-9","time":300,"toggle":"position2-4"},
        {"object":".h-3","time":0,"toggle":"position2-4"},
        {"object":".ph2-4","time":0,"toggle":"changed"},
        {"object":".ph3-4","time":0,"toggle":"unchanged"},    
        {"object":".d-j","time":300,"toggle":"position1-5"},
        {"object":".h-10","time":0,"toggle":"position1-5"},
        {"object":".ph1-5","time":0,"toggle":"changed"},    
        {"object":".ph2-5","time":0,"toggle":"unchanged"},    

        /*
         * Then we'll look at the source branch and calculate the diff
         * here we've marked files modified in both diffs in red.
         */
        {"pause":""},
        {"object":".c-a","time":0,"toggle":"position1-1"},
        {"object":".d-6","time":0,"toggle":"position1-1 position3-5"},
        {"object":".ph1-1","time":0,"toggle":"changed conflict"},
        {"object":".s-6","time":300,"toggle":"position1-2"},
        {"object":".d-10","time":0,"toggle":"position1-2"},
        {"object":".ph1-2","time":0,"toggle":"changed conflict"},    
        {"object":".d-9","time":300,"toggle":"position2-3"},
        {"object":".s-2","time":0,"toggle":"position2-3"},
        {"object":".ph2-3","time":0,"toggle":"changed conflict"},
        {"object":".d-5","time":300,"toggle":"position3-4"},
        {"object":".d-8","time":0,"toggle":"position3-4"},
        {"object":".ph3-4","time":0,"toggle":"unchanged changed"},    

        /*
         * Anything that's unchanged or has only changed in one of the two diffs
         * is safe to merge.
         */
        {"pause":""},
        {"object":".ph1-5","time":0,"toggle":"changed"},
        {"object":".ph2-5","time":0,"toggle":"unchanged"},
        {"object":".ph2-4","time":0,"toggle":"changed"},
        {"object":".ph3-4","time":0,"toggle":"changed"},
        {"object":".ph1-3","time":0,"toggle":"unchanged"},

        /*
         * And because none of our blobs has been modified, all we have to do is
         * re-index the tree and make our commit.
         */
        {"pause":""},
        {"object":".s-2","time":0,"toggle":"position2-3"},
        {"object":".d-3","time":0,"toggle":"offscreen position2-3"},
        {"object":".d-3","time":500,"toggle":"nopip"},
        {"object":".ph2-3","time":0,"toggle":"conflict"},

        {"object":".d-10","time":500,"toggle":"position1-2"},
        {"object":".s-j","time":0,"toggle":"offscreen position1-2"},
        {"object":".s-j","time":500,"toggle":"nopip"},
        {"object":".ph1-2","time":0,"toggle":"conflict"},

        {"object":".d-6","time":500,"toggle":"position1-1"},
        {"object":".h-j","time":0,"toggle":"offscreen position1-1"},
        {"object":".h-j","time":500,"toggle":"nopip"},
        {"object":".ph1-1","time":0,"toggle":"conflict"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-a-c pip-j-h"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        /*
         * Now let's take a look at our history again
         */
        {"pause":""},
        {"object":".s-j","time":0,"toggle":"position1-2"},
        {"object":".d-2","time":0,"toggle":"position1-3"},
        {"object":".d-3","time":0,"toggle":"position2-3"},
        {"object":".h-3","time":0,"toggle":"position2-4"},
        {"object":".d-8","time":0,"toggle":"position3-4"},
        {"object":".h-10","time":0,"toggle":"position1-5"},
        {"object":".c-5","time":0,"toggle":"position2-5"},
        
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-2-4","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".line2-4-to-1-5","time":0,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},

        {"object":".h-j","time":100,"toggle":"position1-1 position2-5"},
        {"object":".s-4","time":100,"toggle":"position1-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".s-10","time":100,"toggle":"position1-2"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".s-q","time":100,"toggle":"position1-3"},
        {"object":".c-a","time":100,"toggle":"position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},

        {"object":".s-k","time":100,"toggle":"position2-2"},
        {"object":".line1-1-to-2-2","time":0,"toggle":"hidden"},
        
        {"object":".d-6","time":100,"toggle":"position2-3"},
        {"object":".line2-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".line1-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-2-5","time":0,"toggle":"hidden"},

        /*
         * After testing to make sure there were no unexpected side effects of
         * the merge, we can check out the master branch and safely merge the 
         * feature branch using the fast forward strategy.
         */
        {"pause":""},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-4-s pip-j-h"},
        {"object":".master .pip","time":200,"toggle":"hidden"},

        /*
         * Now that our local copy of master is updated with all of Derrial's 
         * changes from the origin's master branch, we can safely push our 
         * updates to the server.
         */
        {"pause":""},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":500,"toggle":"pip-6-d pip-j-h"},
        {"object":".origin .pip","time":200,"toggle":"hidden"},

        /*
         * Back in Derrial's repo, master has been updated, and another member 
         * of the team is about to start working on the project.
         */
        {"pause":""},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin","time":0,"toggle":"hidden"},
        {"object":"body","time":0,"toggle":"klee"},

        {"object":".h-j","time":0,"toggle":"position2-5"},
        {"object":".s-4","time":0,"toggle":"position1-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".s-10","time":0,"toggle":"position1-2"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".s-q","time":0,"toggle":"position1-3"},
        {"object":".c-a","time":0,"toggle":"position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},

        {"object":".s-k","time":0,"toggle":"position2-2"},
        {"object":".line1-1-to-2-2","time":0,"toggle":"hidden"},
        
        {"object":".d-6","time":0,"toggle":"position2-3"},
        {"object":".line2-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".line1-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-2-5","time":0,"toggle":"hidden"},

        /*
         * Hoban has picked up a task on the project and has cloned Derrial's
         * repo.
         * 
         * If you're playing at home, assume the role of Hoban
         */
        {"pause":""},
        {"object":"body","time":0,"toggle":"hoban"},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin","time":0,"toggle":"hidden"},
        
        {"object":".h-j","time":300,"toggle":"position1-1"},
        {"object":".s-j","time":300,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".d-2","time":300,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-3","time":300,"toggle":"position2-3"},
        {"object":".h-3","time":300,"toggle":"position2-4"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".d-8","time":300,"toggle":"position3-4"},
        {"object":".h-10","time":300,"toggle":"position1-5"},
        {"object":".c-5","time":300,"toggle":"position2-5"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},

        /*
         * He needs a place to work, so he'll create a branch 
         */
        {"pause":""},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature","time":0,"toggle":"hidden"},

        /*
         * He adds a method to baz and makes his commit
         */
        {"pause":""},
        {"object":".d-8","time":300,"toggle":"position3-4"},
        {"object":".s-5","time":300,"toggle":"offscreen position3-4"},
        {"object":".s-5","time":500,"toggle":"nopip"},
        {"object":".ph3-4","time":300,"toggle":"changed"},
        {"object":".ph2-3","time":300,"toggle":"changed"},
        {"object":".ph1-2","time":300,"toggle":"changed"},
        {"object":".ph1-1","time":300,"toggle":"changed"},
        {"object":".ph3-4","time":300,"toggle":"changed unchanged"},
        {"object":".d-3","time":300,"toggle":"position2-3"},
        {"object":".d-k","time":300,"toggle":"offscreen position2-3"},
        {"object":".d-k","time":500,"toggle":"nopip"},
        {"object":".ph2-3","time":300,"toggle":"changed unchanged"},
        {"object":".s-j","time":300,"toggle":"position1-2"},
        {"object":".h-9","time":300,"toggle":"offscreen position1-2"},
        {"object":".h-9","time":500,"toggle":"nopip"},
        {"object":".ph1-2","time":300,"toggle":"changed unchanged"},
        {"object":".h-j","time":300,"toggle":"position1-1"},
        {"object":".c-4","time":300,"toggle":"offscreen position1-1"},
        {"object":".c-4","time":500,"toggle":"nopip"},
        {"object":".ph1-1","time":300,"toggle":"changed unchanged"},
        {"object":".ph3-4","time":1000,"toggle":"unchanged"},
        {"object":".ph2-3","time":0,"toggle":"unchanged"},
        {"object":".ph1-2","time":0,"toggle":"unchanged"},
        {"object":".ph1-1","time":0,"toggle":"unchanged"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-j-h pip-4-c"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        {"pause":""},
        {"object":".c-4","time":0,"toggle":"position1-1"},
        {"object":".h-9","time":0,"toggle":"position1-2"},
        {"object":".d-2","time":0,"toggle":"position1-3"},
        {"object":".d-k","time":0,"toggle":"position2-3"},
        {"object":".h-3","time":0,"toggle":"position2-4"},
        {"object":".s-5","time":0,"toggle":"position3-4"},
        {"object":".h-10","time":0,"toggle":"position1-5"},
        {"object":".c-5","time":0,"toggle":"position2-5"},

        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-2-4","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".line2-4-to-1-5","time":0,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        
        {"object":"body","time":0,"toggle":"hoban"},
        {"object":".origin","time":0,"toggle":"hidden"},
        {"object":".feature","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-c pip-j-h"},

        /*
         * While he's getting his feature working, another member of the team
         * clones the repo from Derrial and makes a couple of small changes.
         */
        {"pause":""},
        {"object":"body","time":0,"toggle":"zoe"},
        {"object":".origin","time":0,"toggle":"hidden"},

        {"object":".s-q","time":0,"toggle":"position1-1"},
        {"object":".s-k","time":0,"toggle":"position2-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line2-1-to-2-2","time":0,"toggle":"hidden"},
        {"object":".c-a","time":0,"toggle":"position1-2"},
        {"object":".d-6","time":0,"toggle":"position2-2"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".h-j","time":0,"toggle":"position1-3"},
        {"object":".line2-2-to-1-3","time":0,"toggle":"hidden"},
        
        /*
         * Zoe creates a branch
         */
        {"pause":""},
        {"object":".feature","time":0,"toggle":"hidden"},

        /*
         * Updates a constant in baz
         */
        {"pause":""},
        {"object":".h-a","time":300,"toggle":"offscreen front center"},
        {"object":".h-a","time":300,"toggle":"nopip"},
        {"object":".h-a","time":300,"toggle":"front center position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-j-h pip-a-h"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        /*
         * And adds a method to bar.
         */
        {"pause":""},
        {"object":".s-q","time":0,"toggle":"position1-1"},
        {"object":".s-k","time":0,"toggle":"position2-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line2-1-to-2-2","time":0,"toggle":"hidden"},
        {"object":".c-a","time":0,"toggle":"position1-2"},
        {"object":".d-6","time":0,"toggle":"position2-2"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".h-j","time":0,"toggle":"position1-3"},
        {"object":".line2-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".h-a","time":0,"toggle":"position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},

        {"object":".c-3","time":300,"toggle":"offscreen position1-1"},
        {"object":".d-4","time":300,"toggle":"offscreen position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".d-2","time":300,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".c-6","time":300,"toggle":"offscreen position2-3"},
        {"object":".h-8","time":300,"toggle":"offscreen position2-4"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".c-j","time":300,"toggle":"offscreen position3-4"},
        {"object":".h-10","time":300,"toggle":"position1-5"},
        {"object":".c-k","time":300,"toggle":"offscreen position2-5"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},

        {"object":".c-k","time":300,"toggle":"nopip"},
        {"object":".h-8","time":300,"toggle":"nopip"},
        {"object":".c-j","time":300,"toggle":"nopip"},
        {"object":".c-6","time":300,"toggle":"nopip"},
        {"object":".d-4","time":300,"toggle":"nopip"},
        {"object":".c-3","time":300,"toggle":"nopip"},

        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-a-h pip-3-c"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        /*
         * Merges her feature branch into master using the fast forward strategy
         */
        {"pause":""},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-j-h pip-3-c"},
        {"object":".master .pip","time":200,"toggle":"hidden"},

        /*
         * And pushes her changes back to Derrial
         */
        {"pause":""},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":500,"toggle":"pip-j-h pip-3-c"},
        {"object":".origin .pip","time":200,"toggle":"hidden"},

        /*
         * Back over at Hoban's desk, he's finished his testing and he's ready
         * to merge his branch into master.
         */
        {"pause":""},
        {"object":".c-3","time":0,"toggle":"position1-1"},
        {"object":".d-4","time":0,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".d-2","time":0,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".c-6","time":0,"toggle":"position2-3"},
        {"object":".h-8","time":0,"toggle":"position2-4"},
        {"object":".line2-3-to-2-4","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".c-j","time":0,"toggle":"position3-4"},
        {"object":".h-10","time":0,"toggle":"position1-5"},
        {"object":".c-k","time":0,"toggle":"position2-5"},
        {"object":".line2-4-to-1-5","time":0,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-c pip-3-c"},
        {"object":".master .pip","time":0,"toggle":"pip-j-h pip-3-c"},
        {"object":".origin .pip","time":0,"toggle":"pip-j-h pip-3-c"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":0,"toggle":"hidden"},

        {"object":"body","time":0,"toggle":"zoe hoban"},

        /*
         * So he fetches from origin to make sure he's up to date before merging.
         */
        {"pause":""},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":500,"toggle":"pip-j-h pip-3-c"},
        {"object":".origin .pip","time":200,"toggle":"hidden"},
        
        {"object":".c-a","time":0,"toggle":"position1-1"},
        {"object":".d-6","time":0,"toggle":"position2-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line2-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".h-j","time":0,"toggle":"position1-2"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".h-a","time":0,"toggle":"position1-3"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":".c-3","time":0,"toggle":"position1-4"},
        {"object":".c-4","time":0,"toggle":"position2-3"},

        /*
         * He'll need to merge the changes in from master, so he'll need to find
         * the source commit, destination commit and the merge base so he can do
         * a three way merge.
         */
        {"pause":""},
        {"object":".ph1-2","time":0,"toggle":"unchanged"},
        {"object":".ph2-3","time":0,"toggle":"unchanged"},
        {"object":".ph1-4","time":0,"toggle":"unchanged"},

        /*
         * Starting with the merge base
         */
        {"pause":""},
        {"object":".c-a","time":0,"toggle":"position1-1"},
        {"object":".d-6","time":0,"toggle":"position2-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line2-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".h-a","time":0,"toggle":"position1-3"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":".c-3","time":0,"toggle":"position1-4"},
        {"object":".c-4","time":0,"toggle":"position2-3"},
        {"object":".ph1-2","time":0,"toggle":"unchanged"},
        {"object":".ph2-3","time":0,"toggle":"unchanged"},
        {"object":".ph1-4","time":0,"toggle":"unchanged"},

        {"object":".h-j","time":0,"toggle":"position1-2 position1-1"},
        {"object":".s-j","time":300,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".d-2","time":300,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-3","time":300,"toggle":"position2-3"},
        {"object":".h-3","time":300,"toggle":"position2-4"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".d-8","time":300,"toggle":"position3-4"},
        {"object":".h-10","time":300,"toggle":"position1-5"},
        {"object":".c-5","time":300,"toggle":"position2-5"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},

        /*
         * He'll look for changes on the destination branch
         */
        {"pause":""},
        {"object":".h-j","time":0,"toggle":"position1-1"},
        {"object":".c-4","time":0,"toggle":"position1-1"},
        {"object":".ph1-1","time":0,"toggle":"changed"},
        {"object":".s-j","time":300,"toggle":"position1-2"},
        {"object":".h-9","time":0,"toggle":"position1-2"},
        {"object":".ph1-2","time":0,"toggle":"changed"},    
        {"object":".ph1-3","time":0,"toggle":"unchanged"},    
        {"object":".d-3","time":300,"toggle":"position2-3"},
        {"object":".d-k","time":0,"toggle":"position2-3"},
        {"object":".ph2-3","time":0,"toggle":"changed"},    
        {"object":".ph2-4","time":0,"toggle":"unchanged"},
        {"object":".d-8","time":300,"toggle":"position3-4"},
        {"object":".s-5","time":0,"toggle":"position3-4"},
        {"object":".ph3-4","time":0,"toggle":"changed"},    
        {"object":".ph1-5","time":0,"toggle":"unchanged"},    
        {"object":".ph2-5","time":0,"toggle":"unchanged"}, 

        /*
         * And then for changes on the source branch
         */
        {"pause":""},
        {"object":".c-4","time":0,"toggle":"position1-1"},
        {"object":".c-3","time":0,"toggle":"position1-1"},
        {"object":".ph1-1","time":0,"toggle":"changed conflict"},
        {"object":".h-9","time":300,"toggle":"position1-2"},
        {"object":".d-4","time":0,"toggle":"position1-2"},
        {"object":".ph1-2","time":0,"toggle":"changed conflict"},
        {"object":".d-k","time":300,"toggle":"position2-3"},
        {"object":".c-6","time":0,"toggle":"position2-3"},
        {"object":".ph2-3","time":0,"toggle":"changed conflict"},
        {"object":".h-3","time":300,"toggle":"position2-4"},
        {"object":".h-8","time":0,"toggle":"position2-4"},
        {"object":".ph2-4","time":0,"toggle":"unchanged changed"},
        {"object":".c-j","time":300,"toggle":"position3-4"},
        {"object":".ph3-4","time":0,"toggle":"changed conflict"},
        {"object":".c-5","time":300,"toggle":"position2-5"},
        {"object":".c-k","time":0,"toggle":"position2-5"},
        {"object":".ph2-5","time":0,"toggle":"unchanged changed"}, 

        /*
         * He discovers that there is a conflict in the baz file.
         */
        {"pause":""},
        {"object":".ph1-3","time":0,"toggle":"unchanged"},
        {"object":".ph1-5","time":0,"toggle":"unchanged"},
        {"object":".ph2-4","time":0,"toggle":"changed"},
        {"object":".ph2-5","time":0,"toggle":"changed"},
        
        /*
         * Git will automatically calculate the patches and look to see if they
         * overlap. If they don't overlap it can handle the merge automatically.
         * If they do overlap, the merge will require human intervention.
         * Conflicts that require human intervention are relatively rare, but
         * the outcome is the same.
         */
        {"pause":""},
        {"object":".c-j","time":0,"toggle":"position3-4 position3-5"},
        {"object":".s-5","time":0,"toggle":"position3-4 position3-3"},

        /*
         * Whether automatically or with manual intervention from the user, a
         * new file is created that represents the changes from both branches 
         * and it is added to the index.
         */
        {"pause":""},
        {"object":".c-q","time":0,"toggle":"offscreen position3-4"},

        /*
         * This file will be hashed as a blob and the commit will complete
         * normally
         */
        {"pause":""},
        {"object":".c-q","time":0,"toggle":"nopip"},
        {"object":".c-j","time":0,"toggle":"position3-5"},
        {"object":".s-5","time":0,"toggle":"position3-3"},
        {"object":".ph3-4","time":0,"toggle":"conflict"},

        {"object":".c-6","time":300,"toggle":"position2-3"},
        {"object":".h-2","time":0,"toggle":"offscreen position2-3"},
        {"object":".ph2-3","time":0,"toggle":"conflict"},
        {"object":".h-2","time":0,"toggle":"nopip"},
        {"object":".d-4","time":300,"toggle":"position1-2"},
        {"object":".h-k","time":0,"toggle":"offscreen position1-2"},
        {"object":".ph1-2","time":0,"toggle":"conflict"},
        {"object":".h-k","time":0,"toggle":"nopip"},
        {"object":".c-3","time":300,"toggle":"position1-1"},
        {"object":".s-8","time":0,"toggle":"offscreen position1-1"},
        {"object":".ph1-1","time":0,"toggle":"conflict"},
        {"object":".s-8","time":0,"toggle":"nopip"},

        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-c pip-8-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        /*
         * Depending on the merging strategy your team chooses to use, there is
         * another option available to you when merging a branch, called rebase.
         */
        {"pause":""},
        {"object":".s-8","time":0,"toggle":"position1-1 position2-5"},
        {"object":".h-k","time":0,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".d-2","time":0,"toggle":"position1-3"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".h-2","time":0,"toggle":"position2-3"},
        {"object":".h-8","time":0,"toggle":"position2-4"},
        {"object":".line2-3-to-2-4","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".c-q","time":0,"toggle":"position3-4"},
        {"object":".h-10","time":0,"toggle":"position1-5"},
        {"object":".c-k","time":0,"toggle":"position2-5"},
        {"object":".line2-4-to-1-5","time":0,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},

        {"object":".c-a","time":0,"toggle":"position1-1"},
        {"object":".d-6","time":0,"toggle":"position2-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line2-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".h-j","time":0,"toggle":"position1-2"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".h-a","time":0,"toggle":"position1-3"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":".c-3","time":0,"toggle":"position1-4"},
        {"object":".c-4","time":0,"toggle":"position2-3"},
        {"object":".line2-3-to-2-5","time":0,"toggle":"hidden"},
        {"object":".line1-4-to-2-5","time":0,"toggle":"hidden"},

        /*
         * Let's reset Hoban's feature back to before that merge by changing the
         * hash in the feature branch file.
         */
        {"pause":""},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-c pip-8-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},
        
        /*
         * The 8 of spades is no longer in the tree of any branch in the repo.
         * It will hang out in the database for a while in case you want to undo
         * the reset, but will eventually be garbage collected automatically.
         */
        {"pause":""},
        {"object":".line2-3-to-2-5","time":0,"toggle":"gc"},
        {"object":".line1-4-to-2-5","time":0,"toggle":"gc"},
        {"object":".s-8","time":0,"toggle":"gc"},

        /*
         * To rebase the branch onto master we're essentially rewriting history.
         * The goal is to have a single line of development in the history by
         * having each branch start from the head of master.
         * 
         * To accomplish this, git will start from the merge base and work its
         * way up to the head, calculating the diff and creating a patch for
         * each. Here only one patch will be created from the diff between the 
         * four of clubs and the jack of hearts.
         * 
         * Each patch will then be applied as a new commit starting from the
         * head of the branch you're rebasing onto, in this case master. So this
         * new patch will be applied to the three of clubs.
         */
        {"pause":""},
        {"object":".s-3","time":0,"toggle":"offscreen position1-5"},
        {"object":".line1-4-to-1-5","time":0,"toggle":"hidden"},

        /*
         * It is worth noting that the tree of this new commit and the tree of
         * the merge we did earlier have the same hash, so we know that the 
         * result of a merge or a rebase produce the exact same code base down
         * to the bit.
         * 
         * The feature branch is now updated to reference this new commit and
         * the commits on the original branch will also eventually be garbage
         * collected.
         */
        {"pause":""},
        {"object":".s-3","time":0,"toggle":"nopip"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"gc"},
        {"object":".c-4","time":0,"toggle":"gc"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-c pip-3-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        /*
         * Now all that remains is to test and then merge the feature into 
         * master, which can now use the fast forward strategy.
         */
        {"pause":""},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-j-h pip-3-s"},
        {"object":".master .pip","time":200,"toggle":"hidden"},

        /*
         * And finally, push the master branch back up to Derrial.
         */
        {"pause":""},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":500,"toggle":"pip-3-c pip-3-s"},
        {"object":".origin .pip","time":200,"toggle":"hidden"},

        /*
         * Now, gather up your cards and take a moment to get them in order.
         * 
         * As a final review we're going to have a small pop quiz.
         * 
         * I'm going to name a commit in the repo and you have two tasks.
         * 
         * 1. Starting from that commit, construct its entire history back to 
         *    the initial commit
         * 2. Locate its tree and build the working directory out of the trees
         *    and blobs in the database.
         */
        {"pause":""},

        /*
         * Your starting point is: the jack of hearts.
         */
        {"object":".master","time":0,"toggle":"hidden"},
        {"object":".feature","time":0,"toggle":"hidden"},
        {"object":".origin","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"gc hidden"},
        {"object":".line2-3-to-2-5","time":0,"toggle":"gc hidden"},
        {"object":".line1-4-to-2-5","time":0,"toggle":"gc hidden"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line2-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":".line1-4-to-1-5","time":0,"toggle":"hidden"},
        {"object":".c-a","time":0,"toggle":"position1-1"},
        {"object":".d-6","time":0,"toggle":"position2-1"},
        {"object":".h-j","time":0,"toggle":"position1-2"},
        {"object":".h-a","time":0,"toggle":"position1-3"},
        {"object":".c-3","time":0,"toggle":"position1-4"},
        {"object":".s-3","time":0,"toggle":"position1-5"},
        {"object":".c-4","time":0,"toggle":"gc position2-3"},
        {"object":".s-8","time":0,"toggle":"gc position2-5"},
        {"object":"body","time":0,"toggle":"hoban"},
        
        /*
                Contact Slide
        */
       
        /*
         * I want to thank you for participating and hope that seeing how the
         * magic happens has made git's internal workings a lot less mysterious
         * for you.
         * 
         * If you have any questions or comments, feel free to contact me. Go
         * ahead and pause the video here to finish the quiz and when you come
         * back we can go over the answer.
         */
       
        {"object":"slide.background","time":0,"toggle":"hidden"},
        {"object":"#contactslide","time":0,"toggle":"hidden"},
        {"pause":""},
        
        /*
         * Welcome back, let's start with the history, From the jack of hearts
         * the history looks like this. The only card not shown here is the
         * initial commit, the queen of hearts, which is just to the left of
         * the four of spades.
         */
        {"object":"slide.background","time":0,"toggle":"hidden"},
        {"object":"#contactslide","time":0,"toggle":"hidden"},
        
        {"object":".h-j","time":100,"toggle":"position2-5"},
        {"object":".s-4","time":100,"toggle":"position1-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".s-10","time":100,"toggle":"position1-2"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".s-q","time":100,"toggle":"position1-3"},
        {"object":".c-a","time":100,"toggle":"position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":".s-k","time":100,"toggle":"position2-2"},
        {"object":".line1-1-to-2-2","time":0,"toggle":"hidden"},
        {"object":".d-6","time":100,"toggle":"position2-3"},
        {"object":".line2-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".line1-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-2-5","time":0,"toggle":"hidden"},
    
        /*
         * Finally the tree of the jack of hearts commit, which is the jack of 
         * spades tree. The entire file-system is shown here:
         */
        {"pause":""},

        {"object":".h-j","time":100,"toggle":"position1-1 position2-5"},
        {"object":".s-4","time":100,"toggle":"position1-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".s-10","time":100,"toggle":"position1-2"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".s-q","time":100,"toggle":"position1-3"},
        {"object":".c-a","time":100,"toggle":"position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":".s-k","time":100,"toggle":"position2-2"},
        {"object":".line1-1-to-2-2","time":0,"toggle":"hidden"},
        {"object":".d-6","time":100,"toggle":"position2-3"},
        {"object":".line2-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".line1-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-2-5","time":0,"toggle":"hidden"},

        {"object":".s-j","time":0,"toggle":"position1-2"},
        {"object":".d-2","time":0,"toggle":"position1-3"},
        {"object":".d-3","time":0,"toggle":"position2-3"},
        {"object":".h-3","time":0,"toggle":"position2-4"},
        {"object":".d-8","time":0,"toggle":"position3-4"},
        {"object":".h-10","time":0,"toggle":"position1-5"},
        {"object":".c-5","time":0,"toggle":"position2-5"},
        
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-2-4","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".line2-4-to-1-5","time":0,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
    
        {"pause":""}
		
];
