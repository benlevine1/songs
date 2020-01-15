//action creator

export const selectedSong = () => {
  //return an action
  return {
    //needs type, always in caps by convention
    type: 'SONG_SELECTED',
    payload: song
  };
};

