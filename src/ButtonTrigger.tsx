import * as React from 'react';
import { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

export interface IButtonTriggerProps {
  callbackTrigger: () => void;
}

export default class ButtonTrigger extends React.Component<IButtonTriggerProps> {

  public render() {
    return (
      <Fragment>
        <Button content = 'Trigger Button' onClick = {this.props.callbackTrigger} />
      </Fragment>
    );
  }
}
