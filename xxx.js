( function() {

    console.log( "The Script" );

    let paragraphs = document.getElementsByTagName( 'p' );

    for ( let i = 0; i < paragraphs.length; i++ ) {

        paragraphs[i].innerHTML = 'A STORY. FADE IN.';

    }

} ) ();

// (function() {
//
//     let scriptElement = document.createElement('script');
//     scriptElement.src = 'bookmarklet01.js';
//     document.body.appendChild(scriptElement);
//
// })();
