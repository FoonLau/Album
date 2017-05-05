import * as PhotoActions from './photo';
import * as AlbumActions from './album';
import * as SettingActions from './setting';

export const ActionCreators = Object.assign({}, PhotoActions, AlbumActions, SettingActions);