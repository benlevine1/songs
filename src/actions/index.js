//action creator

export const selectSong = song => {
  //return an action
  return {
    //needs type, always in caps by convention
    type: 'SONG_SELECTED',
    payload: song
  };
};

