export const Video = {
  SRC_SET: 'SRC_SET',
  INITIALIZE: 'INITIALIZE',
  VOLUME_UPDATE: 'VOLUME_UPDATE',
  INCREASE_VOLUME: 'INCREASE_VOLUME',
  DECREASE_VOLUME: 'DECREASE_VOLUME',
  MUTED_UPDATE: 'MUTED_UPDATE',
  TOGGLE_MUTED: 'TOGGLE_MUTED',
  INCREASE_RATE: 'INCREASE_RATE',
  DECREASE_RATE: 'DECREASE_RATE',
  CHANGE_RATE: 'CHANGE_RATE',
  PLAY_VIDEO: 'PLAY_VIDEO',
  PAUSE_VIDEO: 'PAUSE_VIDEO',
  META_INFO: 'META_INFO',
  UPDATE_DELAY: 'UPDATE_DELAY',
  ADD_AUDIO_TRACK: 'ADD_AUDIO_TRACK',
  SWITCH_AUDIO_TRACK: 'SWITCH_AUDIO_TRACK',
  REMOVE_ALL_AUDIO_TRACK: 'REMOVE_ALL_AUDIO_TRACK',
  LOOP: 'LOOP',
  UPDATE_PLAYINGLIST_RATE: 'UPDATE_PLAYINGLIST_RATE',
  UPDATE_DEFAULT_DIR: 'UPDATE_DEFAULT_DIR',
  UPDATE_SNAPSHOT_SAVED_PATH: 'UPDATE_SNAPSHOT_SAVED_PATH',
};

export const Subtitle = {
  ADD_SUBTITLE_WHEN_LOADING: 'ADD_SUBTITLE_WHEN_LOADING',
  ADD_SUBTITLE_WHEN_READY: 'ADD_SUBTITLE_WHEN_READY',
  ADD_SUBTITLE_WHEN_FAILED: 'ADD_SUBTITLE_WHEN_FAILED',
  ADD_SUBTITLE_WHEN_LOADED: 'ADD_SUBTITLE_WHEN_LOADED',
  ADD_TO_VIDEO_SUBTITLE_MAP: 'ADD_TO_VIDEO_SUBTITLE_MAP',
  REMOVE_FROM_VIDEO_SUBTITLE_MAP: 'REMOVE_FROM_VIDEO_SUBTITLE_MAP',
  INITIALIZE_VIDEO_SUBTITLE_MAP: 'INITIALIZE_VIDEO_SUBTITLE_MAP',
  CHANGE_CURRENT_FIRST_SUBTITLE: 'CHANGE_FIRST_SUBTITLE',
  CHANGE_CURRENT_SECOND_SUBTITLE: 'CHANGE_SECOND_SUBTITLE',
  RESET_SUBTITLES: 'RESET_SUBTITLES',
  RESET_ONLINE_SUBTITLES: 'RESET_ONLINE_SUBTITLES',
  OFF_SUBTITLES: 'OFF_SUBTITLES',
  UPDATE_METAINFO: 'UPDATE_METAINFO',
  UPDATE_SUBTITLE_DELAY: 'UPDATE_SUBTITLE_DELAY',
  UPDATE_SUBTITLE_SCALE: 'UPDATE_SUBTITLE_SCALE',
  UPDATE_SUBTITLE_STYLE: 'UPDATE_SUBTITLE_STYLE',
  UPDATE_SUBTITLE_SIZE: 'UPDATE_SUBTITLE_SIZE',
  UPDATE_LAST_SUBTITLE_SIZE: 'UPDATE_LAST_SUBTITLE_SIZE',
  UPDATE_NO_SUBTITLE: 'UPDATE_NO_SUBTITLE',
  UPDATE_SUBTITLE_TOP: 'UPDATE_SUBTITLE_TOP',
  REMOVE_LOCAL_SUBTITLE: 'REMOVE_LOCAL_SUBTITLE',
  UPDATE_SUBTITLE_TYPE: 'UPDATE_SUBTITLE_TYPE',
  UPDATE_ENABLED_SECONDARY_SUBTITLE: 'UPDATE_ENABLED_SECONDARY_SUBTITLE',
};

export const newSubtitle = {
  initialize: 'INITIALIZE',
  add: 'ADD',
  load: 'LOAD',
  parse: 'PARSE',
  store: 'STORE',
  delete: 'DELETE',
  upload: 'UPLOAD',
  manualUpload: 'MANUAL_UPLOAD',
  getDialogues: 'GET_DIALOGUES_BY_TIME',
  updatePlayedTime: 'UPDATE_PLAYED_TIME',
  startWatchPlayedTime: 'START_WATCH_PLAYED_TIME',
  stopWatchPlayedTime: 'STOP_WATCH_PLAYED_TIME',
};
export const SubtitleManager = {
  initializeManager: 'INITIALIZE_MANAGER',
  destoryManager: 'DESTROY_MANAGER',
  addSubtitle: 'ADD_SUBTITLE',
  removeSubtitle: 'REMOVE_SUBTITLE',
  refreshSubtitlesInitially: 'REFRESH_SUBTITLES_INITIALLY',
  refreshSubtitles: 'REFRESH_SUBTITLES',
  addLocalSubtitles: 'ADD_LOCAL_SUBTITLES',
  addLocalSubtitlesWithSelect: 'ADD_LOCAL_SUBTITLES_WITH_SELECT',
  addEmbeddedSubtitles: 'ADD_EMBEDDED_SUBTITLES',
  addOnlineSubtitles: 'ADD_ONLINE_SUBTITLES',
  addDatabaseSubtitles: 'ADD_DATABASE_SUBTITLES',
  checkLocalSubtitles: 'CHECK_LOCAL_SUBTITLES',
  deleteSubtitlesByUuid: 'DELETE_SUBTITLES_BY_UUID',
  changePrimarySubtitle: 'CHANGE_PRIMARY_SUBTITLE',
  changeSecondarySubtitle: 'CHANGE_SECONDARY_SUBTITLE',
  storeSelectedSubtitle: 'STORE_SELECTED_SUBTITLE',
  storeSubtitle: 'STORE_SUBTITLE',
  uploadSubtitle: 'UPLOAD_SUBTITLE',
  startAISelection: 'START_AI_SELECTION',
  checkSubtitleList: 'CHECK_SUBTITLE_LIST',
  stopAISelection: 'STOP_AI_SELECTION',
  getCues: 'GET_CUES',
  updatePlayedTime: 'UPDATE_PLAYED_TIME',
  manualUploadAllSubtitles: 'MANUAL_UPLOAD_ALL_SUBTITLES',
  clearSubtitles: 'CLEAR_SUBTITLES',
  setGlobalDelay: 'UPDATE_SUBTITLE_DELAY',
};

export const Input = {
  MOUSEMOVE_UPDATE: 'MOUSEMOVE_UPDATE',
  MOUSEDOWN_UPDATE: 'MOUSEDOWN_UPDATE',
  MOUSEUP_UPDATE: 'MOUSEUP_UPDATE',
  KEYDOWN_UPDATE: 'KEYDOWN_UPDATE',
  KEYUP_UPDATE: 'KEYUP_UPDATE',
  WHEEL_UPDATE: 'WHEEL_UPDATE',
};
