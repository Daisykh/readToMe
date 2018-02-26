// const fs = require('browserify-fs');
// const myCoolAudio = new Audio();
// myCoolAudio.src = '../../public/audio-file.flac';


export const apiGet = async () => {
  // const url = 'http://localhost:5000/';
  // const response = await fetch(url, {
  //   method: "GET",
  // })
  // return await response
}

export const apiPost = async () => {
 // try {
 //    const url = 'http://localhost:5000/checkAudioText'

 //    const newAudio = 'public/audio-file.flac';
 //    const readableStream = await fs.createReadStream(newAudio);
 //    // await readableStream.pipeTo(newAudio)
 //    // debugger
 //    const response = await fetch( url, {
 //      method: 'POST',
 //      headers: { "Content-Type": "application/json" },
 //      body: JSON.stringify({
 //        audio: readableStream
 //      })
 //    })

 //    if (response.status <= 200){
 //      return await response.json()
 //    } else {
 //      throw new Error("Unable to get audioSample transcript")
 //    }
 //  } 
 //  catch(err) {
 //    throw(err)
 //  }  

}

// at new audio
// grab newAudio on server side and pass it along to watson
// 

    // user submits audio, 
    // new read stream is created here and passed into fetch call
    // fs.createRS now living in app
    // recreate watson call with passing fs.CRS(file) here now


    // read stream is passed in here
    // everything has to be text in http calls
    // can't actually send an actual audio file across the internet