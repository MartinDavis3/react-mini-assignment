import * as React from 'react';
import { Fragment } from 'react';
import { Label } from 'semantic-ui-react';

export interface ILabelTriggeredProps {
  triggered: boolean;
}

interface ILabelTriggeredState {
  labelColor: "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black" | undefined;
  labelContent: string;
}

export default class LabelTriggered extends React.Component<ILabelTriggeredProps, ILabelTriggeredState> {

  constructor(props: ILabelTriggeredProps) {
    super(props);
    this.state = {
      labelColor: 'blue',
      labelContent: 'I am a blue label'
    }
  }

  componentDidMount() {
    let newContent = this.state.labelContent + ', but I have been turned red by componentDidMount()';
    this.setState( {
      labelColor: 'red',
      labelContent: newContent
    } );
  }

  public render() {
    if ( this.props.triggered ) {
      return (
        <Fragment>
          <Label color = {this.state.labelColor} size = 'massive' content = {this.state.labelContent} />      
        </Fragment>
      );
    } else {
      return( null );
    }
  }

}
