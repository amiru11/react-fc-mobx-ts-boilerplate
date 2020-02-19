import React, { Component } from 'react';

interface ITextAreaProps {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  id?: string;
  name: string;
}

class InputComponent extends Component<ITextAreaProps> {
  render() {
    const { id, name, onChange, value } = this.props;
    return (
      <textarea id={id ?? ''} name={name} onChange={onChange} value={value} />
    );
  }
}

export default InputComponent;
