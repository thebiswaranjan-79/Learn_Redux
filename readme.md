## REDUX 

Functions of REDUX
=>Combine -> This is a very simple utility function 

// Situation -> we have a String we have to do the following transformation on the String \
              1 -> Remove all the Spaces  
              2 -> Concatenate the String with itself
              3 -> Make all characters uppecase 
              4 -> make it Italic 

              makeitalic(makeUpperCase(removeSpace('abc xyz)));
              ex=> combineDemo.js 
              -> removeSpace -> repeatString -> makeUpperCase -> makeItalic

 ## Alternative of this functions

=> compose -> compose Demo2.js

## Create Store function 
-> it takes reducer function as an argument and a initial state, it returns a Object 

=> Object {

    -> subscribe 
    -> despatch 
    -> getState
    -> replaceReducer
    
}