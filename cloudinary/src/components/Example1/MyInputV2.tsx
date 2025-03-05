import React from 'react';

type MyInputV2Props = React.ComponentProps<'input'> & {
  label: string;
};

const MyInputV2: React.FC<MyInputV2Props> = (props) => {
  const { label, className, ...rest } = props;
  return (
    <div className={className}>
      <div>{label}</div>
      <input {...rest} className="my-input" />
    </div>
  );
};

export default React.memo(MyInputV2);
