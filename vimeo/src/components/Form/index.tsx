import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 定義表單驗證規則
const schema = z.object({
  name: z.string().min(1, { message: '請輸入姓名' }),
  email: z.string().email({ message: '請輸入有效的電子信箱' }),
});

// 利用 z.infer 產生 TypeScript 型別
type FormData = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('表單資料:', data);
  };

  return (
    <section data-name="Example1">
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <h2>註冊表單</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>姓名:</label>
            <input {...register('name')} placeholder="請輸入姓名" />
            {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
          </div>
          <div>
           <label>電子信箱:</label>
           <input {...register('email')} placeholder="請輸入電子信箱" />
           {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
          </div>
          <button type="submit">送出</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
