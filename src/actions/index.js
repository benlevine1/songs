//action creator

export const selectedSong = song => {
  //return an action
  return {
    //needs type, always in caps by convention
    type: 'SONG_SELECTED',
    payload: song
  };
};

