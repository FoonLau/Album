import { combineReducers } from 'redux';
import photos from './photos';
import albums from './albums';
import settings from './settings';

const albumApp = combineReducers({ photos, albums, settings });

export default albumApp;
