# Lab 3: React Notes

## Description

*Construct a realtime collaborative post-it note app with React*

For this lab 3, I created a collaborative post-it note app. In particular, I used one main app and two components to construct my lab: Index.js, Note.js and InputNoteBar.js. Within each of the components, there are a few functions that handle specific features, e.g. (In Note.js --> handleDrag, handleEditTitle, handleResize, etc.).

In part 2 of the lab, I connected the app to Firebase so that all changes persist to Firebase in realtime, and updates are made based on Firebase events.

Finally, I added some extra credit features such as: Show Organized and Resizable Notes

Click URL here: [deployed url](https://vigorous-swirles-732194.netlify.app)

## What Worked Well
All MVPs completed! 

Notes App:
- Add a note:
  - a single title input + create button
- Delete a note
- Move a note in x, y
- Edit a note:
  - title, content
- Notes:
  - have title and content
  - display with some formatting
- Persists all changes to Firebase in realtime
- Updates based on Firebase events
- is at least as stylish as these mockups

## What Didn't
- I tried to implement Z index sorting, but did not have enough time to complete it! 

## Extra Credit
- Implemented a method of note organization that neatly shows all notes
- Implemented resizable feature for notes
- Fancy CSS animated button

## Screenshots
![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/47261209/116181850-58a91980-a6e9-11eb-8c99-abbca4c8a761.gif)

![ezgif com-gif-maker (12)](https://user-images.githubusercontent.com/47261209/116181973-8b531200-a6e9-11eb-94d3-a4bee200f1f4.gif)



