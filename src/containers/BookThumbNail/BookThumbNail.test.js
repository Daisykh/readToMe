// var getUserMedia = require('get-user-media-promise');
// var MicrophoneStream = require('microphone-stream');
 
// document.getElementById('my-start-button').onclick = function() {

//   var micStream = new MicrophoneStream();
 
//   getUserMedia({ video: false, audio: true })
//     .then(function(stream) {
//       micStream.setStream(stream);
//     }).catch(function(error) {
//       console.log(error);
//     });
 
//   micStream.on('data', function(chunk) {
//     es a new DataView - the underlying audio data is not copied or modified.)
//     var raw = MicrophoneStream.toRaw(chunk)
 
//    });
 
//   // or pipe it to another stream
//   // micStream.pipe(/*...*/);
 
//   micStream.on('format', function(format) {
//     console.log(format);
//   });

// }