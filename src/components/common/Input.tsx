import React, { Component } from 'react';

interface IInputProps {
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id?: string;
  name: string;
}

class InputComponent extends Component<IInputProps> {
  render() {
    const { id, name, type, onChange, value } = this.props;
    return (
      <input
        id={id ?? ''}
        name={name}
        type={type ?? 'text'}
        onChange={onChange}
        value={value ?? ''}
      />
    );
  }
}

export default InputComponent;
