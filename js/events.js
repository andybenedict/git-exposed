states = [
        {"object":"logo","time":0,"toggle":"hidden"},

        /*
                Slide 1

        {"object":"slide.background","time":0,"toggle":"hidden"},
        {"object":"#slide1","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide1","time":0,"toggle":"hidden"},
        */

        /*
                Slide 2

        {"object":"#slide2","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide2 .show1","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide2 .show2","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide2 .show3","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide2 .show4","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide2 .show5","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide2 .show6","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide2","time":0,"toggle":"hidden"},
        */

        /*
                Slide 3

        {"object":"#slide3","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide3 .show1","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide3 .show2","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide3","time":0,"toggle":"hidden"},
        */

        /*
                Slide 4

        {"object":"#slide4","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4 .show1","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4 .show2","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4 .show3","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4 .show4","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4 .show5","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4 .show6","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4 .show7","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4 .show8","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4 .show9","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4 .show10","time":0,"toggle":"hidden"},
        {"pause":""},
        {"object":"#slide4","time":0,"toggle":"hidden"},
        {"object":"slide.background","time":0,"toggle":"hidden"},		
        {"pause":""},
        */

        /* 
         * First Commit
         */
        {"object":".workspace","time":0,"toggle":"hidden"},
        {"object":"tree","time":0,"toggle":"hidden"},
//        {"pause":""},
        //create foo
        {"object":".d-j","time":0,"toggle":"offscreen front center"},
//        {"pause":""},
        {"object":".d-j","time":0,"toggle":"nopip"},
//        {"pause":""},
        {"object":".d-j","time":0,"toggle":"front center position1-5"},
//        {"pause":""},
        //create bar
        {"object":".c-5","time":0,"toggle":"offscreen front center"},
//        {"pause":""},
        {"object":".c-5","time":0,"toggle":"nopip"},
//        {"pause":""},
        {"object":".c-5","time":0,"toggle":"front center position2-5"},
//        {"pause":""},
        //create baz
        {"object":".c-7","time":0,"toggle":"offscreen front center"},
//        {"pause":""},
        {"object":".c-7","time":0,"toggle":"nopip"},
//        {"pause":""},
        {"object":".c-7","time":0,"toggle":"front center position3-4"},
//        {"pause":""},
        //create fiz
        {"object":".line2-4-to-1-5","time":0,"toggle":"hidden"},
        {"object":".line2-4-to-2-5","time":0,"toggle":"hidden"},
        {"object":".s-9","time":0,"toggle":"offscreen front center"},
//        {"pause":""},
        {"object":".s-9","time":0,"toggle":"nopip"},
//        {"pause":""},
        {"object":".s-9","time":0,"toggle":"front center position2-4"},
//        {"pause":""},
        //create settings
        {"object":".line2-3-to-2-4","time":0,"toggle":"hidden"},
        {"object":".line2-3-to-3-4","time":0,"toggle":"hidden"},
        {"object":".h-6","time":0,"toggle":"offscreen front center"},
//        {"pause":""},
        {"object":".h-6","time":0,"toggle":"nopip"},
//        {"pause":""},
        {"object":".h-6","time":0,"toggle":"front center position2-3"},
//        {"pause":""},
        //create app
        {"object":".d-2","time":0,"toggle":"offscreen front center"},
//        {"pause":""},
        {"object":".d-2","time":0,"toggle":"nopip"},
//        {"pause":""},
        {"object":".d-2","time":0,"toggle":"front center position1-3"},
//        {"pause":""},
        {"object":".line1-2-to-1-3","time":0,"toggle":"hidden"},
        {"object":".line1-2-to-2-3","time":0,"toggle":"hidden"},
        //create root
        {"object":"tree","time":0,"toggle":"hidden"},
        {"object":".c-8","time":200,"toggle":"offscreen front center"},
//        {"pause":""},
        {"object":".c-8","time":0,"toggle":"nopip"},
//        {"pause":""},
        {"object":".c-8","time":0,"toggle":"front center position1-2"},
//        {"pause":""},
        //create commit
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".h-q","time":0,"toggle":"offscreen front center"},
//        {"pause":""},
        {"object":".h-q","time":0,"toggle":"nopip"},
//        {"pause":""},
        {"object":".h-q","time":0,"toggle":"front center position1-1"},
//        {"pause":""},
        //create register master
        {"object":".master","time":0,"toggle":"offscreen front center"},
//        {"pause":""},
        {"object":".master .pip","time":0,"toggle":"pip-q-h"},
//        {"pause":""},
        {"object":".master","time":0,"toggle":"front center position4-5"},
//        {"pause":""},
        
        /*
         * make a change
         */
        //change baz
        {"object":".c-7","time":300,"toggle":"position3-4"},
        {"object":".d-5","time":300,"toggle":"offscreen front center"},
//        {"pause":""},
        {"object":".d-5","time":0,"toggle":"nopip"},
//        {"pause":""},
        {"object":".d-5","time":0,"toggle":"front center position3-4"},
        {"object":".ph2-3","time":300,"toggle":"changed"},
        {"object":".ph1-2","time":300,"toggle":"changed"},
        {"object":".ph1-1","time":300,"toggle":"changed"},
//        {"pause":""},
        {"object":".h-6","time":0,"toggle":"position2-3"},
        {"object":".d-q","time":300,"toggle":"offscreen position2-3"},
//        {"pause":""},
        {"object":".d-q","time":0,"toggle":"nopip"},
        {"object":".ph2-3","time":500,"toggle":"changed unchanged"},
//        {"pause":""},
        {"object":".c-8","time":0,"toggle":"position1-2"},
        {"object":".c-9","time":300,"toggle":"offscreen position1-2"},
//        {"pause":""},
        {"object":".c-9","time":0,"toggle":"nopip"},
        {"object":".ph1-2","time":500,"toggle":"changed unchanged"},
//        {"pause":""},
        {"object":".h-q","time":0,"toggle":"position1-1"},
        {"object":".s-4","time":300,"toggle":"offscreen position1-1"},
//        {"pause":""},
        {"object":".s-4","time":0,"toggle":"nopip"},
        {"object":".ph1-1","time":500,"toggle":"changed unchanged"},
//        {"pause":""},
        {"object":".ph1-1","time":0,"toggle":"unchanged"},        
        {"object":".ph1-2","time":0,"toggle":"unchanged"},
        {"object":".ph2-3","time":0,"toggle":"unchanged"},
        {"object":".master .pip","time":0,"toggle":"pip-q-h pip-4-s"},
//        {"pause":""},
        
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
        
        {"object":".s-4","time":100,"toggle":"position1-1 position1-2"},
        {"object":".h-q","time":100,"toggle":"position1-1"},
        {"object":".line1-1-to-1-2","time":100,"toggle":"hidden"},
        
//        {"pause":""},
        {"object":".s-4","time":0,"toggle":"hidden"},
        {"object":".h-q","time":0,"toggle":"hidden"},
        {"object":".line1-1-to-1-2","time":0,"toggle":"hidden"},
        {"object":".master","time":0,"toggle":"hidden"},
        {"object":"body","time":0,"toggle":"klee"},
        
        /*
         * Kaylee clones the repo
         */
        
        /* Klee requests the repo */
//        {"pause":""},
        {"object":".s-4","time":0,"toggle":"hidden"},
        {"object":".h-q","time":0,"toggle":"hidden"},
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
        {"object":".s-a","time":0,"toggle":"nopip offscreen position4-4"},
        
        {"pause":""},        
        {"object":".s-a .pip","time":0,"toggle":"pip-4-s"},

        {"pause":""},
        {"object":"body","time":0,"toggle":"klee"},
        {"object":".s-a","time":0,"toggle":"hidden"},
    
/*	{"pause":""},
        {"object":".h-q","time":0,"toggle":"front center position1-1"},
        {"object":".ph1-1","time":200,"toggle":"unchanged"},
        {"object":".c-8","time":0,"toggle":"position1-2"},
        {"object":".ph1-2","time":200,"toggle":"unchanged"},
        {"object":".d-2","time":0,"toggle":"position1-3"},
        {"object":".ph1-3","time":200,"toggle":"unchanged"},
        {"object":".h-6","time":0,"toggle":"position2-3"},
        {"object":".ph2-3","time":200,"toggle":"unchanged"},
        {"object":".s-9","time":0,"toggle":"position2-4"},
        {"object":".ph2-4","time":200,"toggle":"unchanged"},
        {"object":".c-7","time":0,"toggle":"position3-4"},
        {"object":".ph3-4","time":200,"toggle":"unchanged"},
        {"object":".d-j","time":0,"toggle":"position1-5"},
        {"object":".ph1-5","time":200,"toggle":"unchanged"},
        {"object":".c-5","time":0,"toggle":"position2-5"},
        {"object":".ph2-5","time":200,"toggle":"unchanged"},
        {"pause":""},
        {"object":".h-q","time":200,"toggle":"front center"},
        {"pause":""},
        {"object":".h-q","time":200,"toggle":"front center"}
*/	{"pause":""}
]