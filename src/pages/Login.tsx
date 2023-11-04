import { useForm } from 'react-hook-form';
interface LoginProps {
    email: string;
    password: string;
}
export default function Login() {
    const { register, handleSubmit } = useForm<LoginProps>()
    const onFormSubmit = (data: LoginProps) => console.log(data);
    return (
        <main>
            <section className="container flex flex-col gap-10">
                <h1 className="text-center text-3xl">Login</h1>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onFormSubmit)}>
                    <input className="w-1/3 h-8 self-center placeholder: pl-4" type="email" {...register('email',{required: 'email is required'})}  placeholder="email"/>
                    <input className="w-1/3 h-8 self-center placeholder: pl-4" type="password" {...register('password', {required: true})}  placeholder="password"/>
                    <button className="bg-yellow-400 w-1/3 h-8 self-center">login</button>
                </form>
            </section>
        </main>
    );
}
