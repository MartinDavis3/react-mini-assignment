import React from 'react';
import { Fragment } from 'react';
import './App.css';
import ButtonTrigger from './ButtonTrigger';
import LabelTriggered from './LabelTriggered';

export interface IAppProps {
}

interface IState {
  triggered: boolean;
}

export default class App extends React.Component<IAppProps, IState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = { triggered: false }
  }

  onClickButtonTrigger = () => {
    this.setState( { triggered: true} );
  }

  public render () {
    return (
      <Fragment>
        <ButtonTrigger callbackTrigger = { this.onClickButtonTrigger } />
        <LabelTriggered triggered = { this.state.triggered } />
      </Fragment>
    );
  }

}

