import { connect } from 'react-redux';

import { ActionCreators } from '../actions';

import ImagePicker from '../components/ImagePicker';

function mapStoreToProps() {
  return {};
}

function mapDispatchToStore(dispatch) {
  return {
    onComplete: (selectedImages) => {
      dispatch(ActionCreators.addPhoto(selectedImages));
    },
  };
}

export default connect(mapStoreToProps, mapDispatchToStore)(ImagePicker);
