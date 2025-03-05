import MyInputV1 from './MyInputV1';
import MyInputV2 from './MyInputV2';

const Example = () => {
  return (
    <section data-name="Example1">
      <MyInputV1 label="MyInputV1" />
      <MyInputV2 label="MyInputV2" type="email" placeholder="placeholder" />
    </section>
  );
};

export default Example;
