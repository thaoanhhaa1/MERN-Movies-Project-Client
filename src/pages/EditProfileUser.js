import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Checkbox from '~/components/Checkbox';
import Form from '~/components/Form';
import FormGroup from '~/components/FormGroup';
import Input from '~/components/Input';
import Label from '~/components/Label';
import useAuth from '~/context/Auth';
import { db } from '~/firebase/firebaseConfig';

const EditProfileUser = () => {
    const { user, setUser } = useAuth();
    const {
        control,
        reset,
        watch,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm();

    const handleValid = async (values) => {
        try {
            await updateDoc(doc(db, 'users', user.uid), {
                ...values,
                updatedAt: serverTimestamp(),
            });

            setUser((user) => ({ ...user, ...values }));
            toast.success('Update personal information successfully!');
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (!user) return;

        const defaultValues = {
            name: user.displayName,
            birthday: user.birthday,
            gender: !!user.gender,
        };

        if (user.provider === 'email') defaultValues.password = user.password;

        reset(defaultValues);
    }, [reset, user]);

    if (!user) return null;

    const genderWatch = watch('gender');

    return (
        <div className="mt-[50px] max-w-[800px] mx-auto">
            <h1 className="font-semibold text-3xl text-center">
                Edit Personal Information
            </h1>
            <Form
                onSubmit={handleSubmit(handleValid)}
                cols={2}
                className="mt-[30px]"
            >
                <FormGroup>
                    <Label htmlFor="name">Full name</Label>
                    <Input
                        control={control}
                        placeholder="Enter your name"
                        name="name"
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="birthday">Birthday</Label>
                    <Input
                        type="date"
                        control={control}
                        name="birthday"
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="gender">Gender</Label>
                    <Checkbox
                        value={!!genderWatch}
                        control={control}
                        name="gender"
                        className="mt-[11px]"
                    >
                        Male
                    </Checkbox>
                </FormGroup>
                {user.provider === 'email' && (
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            control={control}
                            placeholder="Enter your password"
                            name="password"
                        ></Input>
                    </FormGroup>
                )}
                <Form.Submit isLoading={isSubmitting}>Update</Form.Submit>
            </Form>
        </div>
    );
};

export default EditProfileUser;
