# video-streamer

This program has the basic functionality that mimics something like Twitch that allows a user to create streaming video channels. It uses React, React-Router-Dom, Lodash, Redux, Redux Thunk, and a number of other libraries. 

It only works locally and you must do an npm start for the api, the rtmpserver, and the client side individually to make it work. 

You also have to have the Open Broadcasting System (OBS) to actually stream to the local channel. You have to tell OBS the right channel to stream to (1, 2, 3, etc.) via Settings > Stream > Service = Custom, Server = rtmp://localhost/live, and Stream Key = (whatever stream from the list of streams in the app you want to stream to, the value will be numerical [1, 2, 3, etc.]).
