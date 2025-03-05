import React from 'react';

type MyInputProps = {
  className?: string;
  label: string;
};

const MyInput: React.FC<MyInputProps> = (props) => {
  const { label, className, ...rest } = props;
  return (
    <div className={className}>
      <div>{label}</div>
      <input {...rest} className="my-input" />
    </div>
  );
};

export default React.memo(MyInput);
