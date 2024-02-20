
  // Define type for reducerCase
  const reducerCase = {
    SET_CAROUSEL: "SET_CAROUSEL" as const,
    SET_SONG: "SET_SONG" as const,
    SET_TRACKLIST: "SET_TRACKLIST" as const,
    CLEAR_TRACKLIST: "CLEAR_TRACKLIST" as const,
    SET_CURRENTINDEX: "SET_CURRENTINDEX" as const,
    SET_LOADING: "SET_LOADING" as const,
    SET_ERROR: "SET_ERROR" as const,
  } as const;
  
  export default reducerCase;