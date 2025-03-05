import React from 'react';

type MyComponentProps = {
  name: string;
  age?: number;
};
const MyComponent: React.FC<MyComponentProps> = (props) => {
  const { name, age } = props;
  return (
    <div>
      {name}, {age}
    </div>
  );
};

export default MyComponent;
