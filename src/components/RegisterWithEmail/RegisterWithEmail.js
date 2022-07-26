import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Form from '~/components/Form';
import FormGroup from '~/components/FormGroup';
import Input from '~/components/Input';
import Label from '~/components/Label';
import config from '~/config';
import useAuth from '~/context/Auth';
import { auth, db } from '~/firebase/firebaseConfig';
import * as httpRequest from '~/utils/httpRequest';

const RegisterWithEmail = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm();
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleValid = async (values) => {
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password,
            );

            await updateProfile(user, {
                displayName: values.name,
            });

            const result = await httpRequest.post('/user/signup', values);

            await setDoc(doc(db, 'users', user.uid), {
                ...result.data,
                createdAt: serverTimestamp(),
            });

            reset();
            setUser(user);
            toast.success('User created successfully');
            navigate(config.routes.home);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <Form onSubmit={handleSubmit(handleValid)}>
            <FormGroup>
                <Label htmlFor="email">Your name?</Label>
                <Input
                    control={control}
                    name="name"
                    placeholder="Your name"
                ></Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                    control={control}
                    name="email"
                    placeholder="Email address"
                ></Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                    control={control}
                    type="password"
                    name="password"
                    placeholder="Password"
                ></Input>
            </FormGroup>
            <Button isLoading={isSubmitting} className="w-full" large primary>
                Register
            </Button>
        </Form>
    );
};

export default RegisterWithEmail;
