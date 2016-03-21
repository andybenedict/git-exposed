states = [
    
        /*
         * Before we get started, let's take a moment to get you prepared:
         * 
         * This is an interative presentation, and in order to get the most
         * out of it, I highly recommend you participate at home.
         * 
         * If you're watching the video of the presentation, keep your mouse
         * on the pause button, we will be operating on the assumption that
         * you can pause and rewind as needed, so we won't be trying to guess
         * how much empty time to add between things. Take as much as you 
         * need.
         * 
         * To completely play along, you'll need a few props:
         * 54 playing cards
         *     *  make your own deck with a blank deck of cards, or even a 
         *        pack of index cards will do the job, you'll need at least
         *        2 colors of markers to write out the cards
         *     *  you can download a PDF of the cards used in the
         *        presentation, print and cut them out
         * 1-2 Markers
         * PostIt notes
         * 
         */
        {"object":"logo","time":0,"toggle":"hidden"},

        /*
         * Slide 1
         * 
         * So, what is git?
         * 
         * Now, if you're listening at home, please don't turn this off
         * after hearing this, I promise that if you play the at home
         * version of the game, by the time we're done, you'll understand
         * every concept in the next sentance.
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
         * indexed by staticially unique, content-based, pseudo-random
         * hashes and whose entire history and content can be accessed,
         * from any aribrary starting point, by means of the recursive
         * traversal of its node space, which is best represented in the
         * form of a directed acyclic graph mapped, along with its
         * content in four dimensions.
         * 
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
         * computer, and often only once file at a time.
         * 
         * Each generation eventually had a VCS come out on top, to the point
         * that it essentially defined the generation
         * 
         */
        {"object":"#slide2 .show1","time":0,"toggle":"hidden"},
        {"object":"#slide2 .show2","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 2.2
         * 
         * The first generation of modern VCS was the Concurrent Versioning 
         * System or CVS. It was server based, which made it a tool that could
         * be used by teams, but major VCS features like branching were very 
         * difficult to do and as a result, usually were ignored all together.
         * 
         */
        {"object":"#slide2 .show3","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 2.3
         * 
         * Mostly because people were fed up with using CVS. Subversion was 
         * created as a replacement. Billed as "CVS Done Right" it was largely
         * modeled after CVS in how it did things, for example, both systems 
         * were centralized on a server. Without an active network connection
         * it was impossible to commit.
         * 
         * While easier, branching was still expensive and somewhat difficult
         * to manage. Again, most teams just didn't want to deal with it and
         * developed on a single branch.
         * 
         */
        {"object":"#slide2 .show4","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 2.4
         * 
         * The current generation of VCS went back to the drawing board and 
         * attempted to build a more modern system that would work for the new
         * realities of development.
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
         * It was originally written by Linus Torvolds to manage the linux 
         * kernel project
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
         * accurate, it really only means somthing to you if you already know
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
         * It's also very difficult to actually graph its tree in a way that
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
         * you are used to older systems.
         */
        {"object":"#slide4 .show5","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.6
         * 
         * A lot of that misinformation and difficulty comes from trying to 
         * compare git to systems you already know. A lot of the commands are
         * similar to older systems, and so many people incorrectly apply their
         * understanding of CVS or Subversion to git, which will eventually
         * cause them headaches.
         */
        {"object":"#slide4 .show6","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.7
         * 
         * Git has a lot of things commonly referred to as trees, including
         * both the history and the file system
         */
        {"object":"#slide4 .show7","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 4.8
         * 
         * Because if its distributed nature, you'll frequently have multiple 
         * versions of the same branch. Some referencing your state and another
         * representing the state of that branch on another copy of the repo in 
         * another location
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
         * As a result, the command line syntax can often get a big wobbly, but
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
         * It generates its has based on the content of the file
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
         * playing card and make them into a deck. It's hard to express how big
         * it is, but we'll try. From where you are standing, pick a direction.
         * Go 15 million kilometers in that direction. Draw a big circle around 
         * your starting point and fill that circle with cards all the way to
         * the edge. Then start stacking the cards up, until they reach from one
         * end of the observable universe to the other. About 93 billion light
         * years. A light-year is about 9.5 billion kilometers.
         * 
         * This deck of cards would require the matter of over 1 million milky-
         * way sized galaxies to manufacture. And it would promptly collapse 
         * into a black hole that would wipe out all life.
         */
        {"object":"#slide5 .show8","time":0,"toggle":"hidden"},
        {"pause":""},
        /*
         * Slide 5.9
         * 
         * For simplicity, and safety, we've compressed the hash space for this
         * presentation to fit a normal 54 card deck.
         */
        {"object":"#slide5 .show9","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide5","time":0,"toggle":"hidden"},
        {"object":"slide.background","time":0,"toggle":"hidden"},		
        {"pause":""},
		
		
        /* 
         * First Commit
         */
        {"object":".workspace","time":0,"toggle":"hidden"},
        {"object":"tree","time":0,"toggle":"hidden"},
        {"pause":""},
        //create foo
        {"object":".d-j","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        {"object":".d-j","time":0,"toggle":"nopip"},
        {"pause":""},
        {"object":".d-j","time":0,"toggle":"front center position1-5"},
        {"pause":""},
        //create bar
        {"object":".c-5","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        {"object":".c-5","time":0,"toggle":"nopip"},
        {"pause":""},
        {"object":".c-5","time":0,"toggle":"front center position2-5"},
        {"pause":""},
        //create baz
        {"object":".c-7","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        {"object":".c-7","time":0,"toggle":"nopip"},
        {"pause":""},
        {"object":".c-7","time":0,"toggle":"front center position3-4"},
        {"pause":""},
        //create fiz
        {"object":".line2-4-to-1-5","time":0,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".s-9","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        {"object":".s-9","time":0,"toggle":"nopip"},
        {"pause":""},
        {"object":".s-9","time":0,"toggle":"front center position2-4"},
        {"pause":""},
        //create settings
        {"object":".line2-3-to-2-4","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},
        {"object":".h-6","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        {"object":".h-6","time":0,"toggle":"nopip"},
        {"pause":""},
        {"object":".h-6","time":0,"toggle":"front center position2-3"},
        {"pause":""},
        //create app
        {"object":".d-2","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        {"object":".d-2","time":0,"toggle":"nopip"},
        {"pause":""},
        {"object":".d-2","time":0,"toggle":"front center position1-3"},
        {"pause":""},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        //create root
        {"object":"tree","time":0,"toggle":"hidden"},
        {"object":".c-8","time":200,"toggle":"offscreen front center"},
        {"pause":""},
        {"object":".c-8","time":0,"toggle":"nopip"},
        {"pause":""},
        {"object":".c-8","time":0,"toggle":"front center position1-2"},
        {"pause":""},
        //create commit
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".h-q","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        {"object":".h-q","time":0,"toggle":"nopip"},
        {"pause":""},
        {"object":".h-q","time":0,"toggle":"front center position1-1"},
        {"pause":""},
        //create register master
        {"object":".master","time":0,"toggle":"offscreen front center"},
        {"pause":""},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-q-h"},
        {"object":".master .pip","time":200,"toggle":"hidden"},
        {"pause":""},
        {"object":".master","time":0,"toggle":"front center position4-5"},
        {"pause":""},
        
        /*
         * make a change
         */
        //change baz
        {"object":".c-7","time":300,"toggle":"position3-4"},
        {"object":".d-5","time":300,"toggle":"offscreen front center"},
        {"pause":""},
        {"object":".d-5","time":0,"toggle":"nopip"},
        {"pause":""},
        {"object":".d-5","time":0,"toggle":"front center position3-4"},
        {"object":".ph2-3","time":300,"toggle":"changed"},
        {"object":".ph1-2","time":300,"toggle":"changed"},
        {"object":".ph1-1","time":300,"toggle":"changed"},
        {"pause":""},
        {"object":".h-6","time":0,"toggle":"position2-3"},
        {"object":".d-q","time":300,"toggle":"offscreen position2-3"},
        {"pause":""},
        {"object":".d-q","time":0,"toggle":"nopip"},
        {"object":".ph2-3","time":500,"toggle":"changed unchanged"},
        {"pause":""},
        {"object":".c-8","time":0,"toggle":"position1-2"},
        {"object":".c-9","time":300,"toggle":"offscreen position1-2"},
        {"pause":""},
        {"object":".c-9","time":0,"toggle":"nopip"},
        {"object":".ph1-2","time":500,"toggle":"changed unchanged"},
        {"pause":""},
        {"object":".h-q","time":0,"toggle":"position1-1"},
        {"object":".s-4","time":300,"toggle":"offscreen position1-1"},
        {"pause":""},
        {"object":".s-4","time":0,"toggle":"nopip"},
        {"object":".ph1-1","time":500,"toggle":"changed unchanged"},
        {"pause":""},
        {"object":".ph1-1","time":0,"toggle":"unchanged"},        
        {"object":".ph1-2","time":0,"toggle":"unchanged"},
        {"object":".ph2-3","time":0,"toggle":"unchanged"},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-q-h pip-4-s"},
        {"object":".master .pip","time":200,"toggle":"hidden"},
        {"pause":""},
        
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
        
        {"pause":""},
        {"object":".h-q","time":0,"toggle":"hidden"},
        {"object":".s-4","time":0,"toggle":"hidden"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".master","time":0,"toggle":"hidden"},
        {"object":"body","time":0,"toggle":"klee"},
        
        /*
         * Kaylee clones the repo
         */
        
        /* Klee requests the repo */
        {"pause":""},
        {"object":".h-q","time":0,"toggle":"hidden"},
        {"object":".s-4","time":0,"toggle":"hidden"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".master","time":0,"toggle":"hidden"},
        {"object":"body","time":0,"toggle":"klee"},

        /* Master resolves what needs to be transmitted */
        {"pause":""},
        {"object":".s-4","time":100,"toggle":"position1-2"},
        {"object":".c-8","time":100,"toggle":"position1-2"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-2","time":100,"toggle":"position1-3"},
        {"object":".h-6","time":100,"toggle":"position2-3"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".s-9","time":100,"toggle":"position2-4"},
        {"object":".c-7","time":100,"toggle":"position3-4"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".d-j","time":100,"toggle":"position1-5"},
        {"object":".c-5","time":100,"toggle":"position2-5"},       

        {"pause":""},
        {"object":".s-4","time":100,"toggle":"position1-1"},
        {"object":".h-q","time":0,"toggle":"position1-1 position2-1"},
        {"object":".c-9","time":100,"toggle":"position1-2"},
        {"object":".c-8","time":0,"toggle":"position1-2 position2-1"},
        {"object":".d-q","time":100,"toggle":"position2-3"},
        {"object":".h-6","time":0,"toggle":"position2-3 position2-1"},
        {"object":".d-5","time":100,"toggle":"position3-4"},
        {"object":".c-7","time":0,"toggle":"position3-4 position2-1"},

        {"pause":""},
        {"object":".s-4","time":100,"toggle":"position1-1 position2-1"},
        {"object":".c-9","time":100,"toggle":"position1-2 position2-1"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        {"object":".d-2","time":100,"toggle":"position1-3 position2-1"},
        {"object":".d-q","time":100,"toggle":"position2-3 position2-1"},
        {"object":".line2-3-to-2-4","time":100,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},       
        {"object":".s-9","time":100,"toggle":"position2-4 position2-1"},
        {"object":".d-5","time":100,"toggle":"position3-4 position2-1"},
        {"object":".line2-4-to-1-5","time":100,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".d-j","time":100,"toggle":"position1-5 position2-1"},
        {"object":".c-5","time":100,"toggle":"position2-5 position2-1"},

        /* transfer files */
        {"pause":""},
        {"object":"body","time":0,"toggle":"klee"},
        {"object":".master","time":0,"toggle":"hidden"},

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

        /* Create master branch */
        {"pause":""},
        {"object":".master","time":0,"toggle":"hidden"},

        /*
         * Introduce origin/master
         */
        {"pause":""},
        {"object":".origin","time":0,"toggle":"nopip offscreen position4-4"},
        
        {"pause":""},        
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":500,"toggle":"pip-4-s"},
        {"object":".origin .pip","time":200,"toggle":"hidden"},

        {"pause":""},
        {"object":"body","time":0,"toggle":"klee"},
        {"object":".origin","time":0,"toggle":"hidden"},

        /*
         * Create a branch
         */

        {"object":".h-q","time":100,"toggle":"position1-1"},
        {"object":".s-4","time":100,"toggle":"position1-2"},
        {"object":".line1-1-to-1-2","time":100,"toggle":"hidden"},

        {"pause":""},
        {"object":".feature","time":0,"toggle":"nopip offscreen position4-4"},
        
        {"pause":""},        
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        {"pause":""},        
        {"object":".s-k","time":0,"toggle":"offscreen front center"},

        {"pause":""},        
        {"object":".s-k","time":0,"toggle":"nopip"},

        {"pause":""},        
        {"object":".s-k","time":0,"toggle":"front center position1-3"},
        {"object":".line1-2-to-1-3","time":100,"toggle":"hidden"},

        {"pause":""},        
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-k-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

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
         */

        {"pause":""},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-4-s pip-6-d"},
        {"object":".master .pip","time":200,"toggle":"hidden"},

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

        {"pause":""},        
        {"object":".s-10","time":300,"toggle":"offscreen front center"},

        {"object":".s-10","time":300,"toggle":"nopip"},

        {"object":".s-10","time":300,"toggle":"front center position1-3"},
        {"object":".line1-2-to-1-3","time":100,"toggle":"hidden"},
        {"object":".feature","time":300,"toggle":"hidden position4-4 position4-3"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-s pip-10-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},
    
        {"pause":""},
        {"object":".s-q","time":300,"toggle":"offscreen front center"},

        {"object":".s-q","time":300,"toggle":"nopip"},

        {"object":".s-q","time":300,"toggle":"front center position1-4"},
        {"object":".line1-3-to-1-4","time":100,"toggle":"hidden"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-10-s pip-q-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},


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

        {"pause":""},
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
         */
        {"pause":""},
        {"object":".ph2-4","time":0,"toggle":"unchanged"},    
        {"pause":""},
        {"object":".ph1-5","time":0,"toggle":"unchanged"},    
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
        
        {"pause":""},
        {"object":".ph1-2","time":0,"toggle":"unchanged"},    
        {"object":".s-4","time":300,"toggle":"position1-2 position1-1"},
        {"pause":""},
        {"object":".ph2-4","time":0,"toggle":"unchanged"},    
        {"object":".d-6","time":300,"toggle":"position2-4 position3-5"},
        {"pause":""},
        {"object":".ph1-5","time":0,"toggle":"unchanged"},    
        {"object":".c-a","time":300,"toggle":"position1-5 position3-5"},

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

        {"pause":""},
        {"object":".ph1-5","time":0,"toggle":"changed"},
        {"object":".ph2-5","time":0,"toggle":"unchanged"},
        {"object":".ph2-4","time":0,"toggle":"changed"},
        {"object":".ph3-4","time":0,"toggle":"changed"},
        {"object":".ph1-3","time":0,"toggle":"unchanged"},

        {"pause":""},
        {"object":".s-2","time":0,"toggle":"position2-3"},
        {"object":".d-3","time":0,"toggle":"offscreen position2-3"},
        {"object":".d-3","time":500,"toggle":"nopip"},
        {"object":".ph2-3","time":0,"toggle":"conflict"},

        {"pause":""},
        {"object":".d-10","time":0,"toggle":"position1-2"},
        {"object":".s-j","time":0,"toggle":"offscreen position1-2"},
        {"object":".s-j","time":500,"toggle":"nopip"},
        {"object":".ph1-2","time":0,"toggle":"conflict"},

        {"pause":""},
        {"object":".d-6","time":0,"toggle":"position1-1"},
        {"object":".h-j","time":0,"toggle":"offscreen position1-1"},
        {"object":".h-j","time":500,"toggle":"nopip"},
        {"object":".ph1-1","time":0,"toggle":"conflict"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-a-c pip-j-h"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

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

        {"pause":""},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-4-s pip-j-h"},
        {"object":".master .pip","time":200,"toggle":"hidden"},

        {"pause":""},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":500,"toggle":"pip-6-d pip-j-h"},
        {"object":".origin .pip","time":200,"toggle":"hidden"},

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

        {"pause":""},
        {"object":"body","time":0,"toggle":"hoban"},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature","time":0,"toggle":"hidden"},

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

        {"pause":""},
        {"object":".d-8","time":300,"toggle":"position3-4"},
        {"object":".s-5","time":300,"toggle":"offscreen position3-4"},
        {"object":".s-5","time":500,"toggle":"nopip"},
        {"object":".ph3-4","time":300,"toggle":"changed"},
        {"object":".ph2-3","time":0,"toggle":"changed"},
        {"object":".ph1-2","time":0,"toggle":"changed"},
        {"object":".ph1-1","time":0,"toggle":"changed"},
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
        
        {"pause":""},
        {"object":".feature","time":0,"toggle":"hidden"},

        {"pause":""},
        {"object":".h-a","time":300,"toggle":"offscreen front center"},
        {"object":".h-a","time":300,"toggle":"nopip"},
        {"object":".h-a","time":300,"toggle":"front center position1-4"},
        {"object":".line1-3-to-1-4","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-j-h pip-a-h"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

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

        {"pause":""},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-j-h pip-3-c"},
        {"object":".master .pip","time":200,"toggle":"hidden"},

        {"pause":""},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":500,"toggle":"pip-j-h pip-3-c"},
        {"object":".origin .pip","time":200,"toggle":"hidden"},

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

        {"pause":""},
        {"object":".ph1-2","time":0,"toggle":"unchanged"},
        {"object":".ph2-3","time":0,"toggle":"unchanged"},
        {"object":".ph1-4","time":0,"toggle":"unchanged"},

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

        {"pause":""},
        {"object":".ph1-3","time":0,"toggle":"unchanged"},
        {"object":".ph1-5","time":0,"toggle":"unchanged"},
        {"object":".ph2-4","time":0,"toggle":"changed"},
        {"object":".ph2-5","time":0,"toggle":"changed"},
        
        {"pause":""},
        {"object":".c-j","time":0,"toggle":"position3-4 position3-5"},
        {"object":".s-5","time":0,"toggle":"position3-4 position3-3"},

        {"pause":""},
        {"object":".c-q","time":0,"toggle":"offscreen position3-4"},

        {"pause":""},
        {"object":".c-q","time":0,"toggle":"nopip"},
        {"object":".c-j","time":0,"toggle":"position3-5"},
        {"object":".s-5","time":0,"toggle":"position3-3"},
        {"object":".ph3-4","time":0,"toggle":"conflict"},

        {"pause":""},
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

        {"pause":""},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-c pip-8-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},
        
        {"pause":""},
        {"object":".line2-3-to-2-5","time":0,"toggle":"gc"},
        {"object":".line1-4-to-2-5","time":0,"toggle":"gc"},
        {"object":".s-8","time":0,"toggle":"gc"},

        {"pause":""},
        {"object":".s-3","time":0,"toggle":"offscreen position1-5"},
        {"object":".line1-4-to-1-5","time":0,"toggle":"hidden"},

        {"pause":""},
        {"object":".s-3","time":0,"toggle":"nopip"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"gc"},
        {"object":".c-4","time":0,"toggle":"gc"},
        {"object":".feature .pip","time":0,"toggle":"hidden"},
        {"object":".feature .pip","time":500,"toggle":"pip-4-c pip-3-s"},
        {"object":".feature .pip","time":200,"toggle":"hidden"},

        {"pause":""},
        {"object":".master .pip","time":0,"toggle":"hidden"},
        {"object":".master .pip","time":500,"toggle":"pip-j-h pip-3-s"},
        {"object":".master .pip","time":200,"toggle":"hidden"},

        {"pause":""},
        {"object":".origin .pip","time":0,"toggle":"hidden"},
        {"object":".origin .pip","time":500,"toggle":"pip-3-c pip-3-s"},
        {"object":".origin .pip","time":200,"toggle":"hidden"},

        {"pause":""},

        /*
                Contact Slide
        */

        {"object":"slide.background","time":0,"toggle":"hidden"},
        {"object":"#contactslide","time":0,"toggle":"hidden"},
        {"pause":""}
		
]   