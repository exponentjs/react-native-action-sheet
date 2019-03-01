/**
 * @format
 * @flow
 */

import * as React from 'react';
// $FlowFixMe: Cannot resolve module hoist-non-react-statics
import hoistStatics from 'hoist-non-react-statics';

// TODO: we should make more strict annotation
export default function connectActionSheet(WrappedComponent: any): any {
  const ConnectedActionSheet = (props, context) => {
    return (
      <WrappedComponent
        {...props}
        showActionSheetWithOptions={context.showActionSheetWithOptions}
      />
    );
  };

  ConnectedActionSheet.contextTypes = {
    showActionSheetWithOptions: Function,
  };

  return hoistStatics(ConnectedActionSheet, WrappedComponent);
}
