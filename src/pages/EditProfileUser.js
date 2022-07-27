import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '~/components/Form';
import FormGroup from '~/components/FormGroup';
import Input from '~/components/Input';
import Label from '~/components/Label';
import useAuth from '~/context/Auth';

const EditProfileUser = () => {
    const { user } = useAuth();
    const { control, reset } = useForm();

    useEffect(() => {
        if (!user) return;

        const defaultValues = {
            name: user.displayName,
            birthday: user.birthday,
            gender: user.gender,
        };

        if (user.provider === 'email') defaultValues.password = user.password;

        reset(defaultValues);
    }, [reset, user]);

    if (!user) return null;

    return (
        <div className="mt-[50px] max-w-[800px] mx-auto">
            <h1 className="font-semibold text-3xl text-center">
                Edit Personal Information
            </h1>
            <Form cols={2} className="mt-[30px]">
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
                        control={control}
                        placeholder="Enter your birthday"
                        name="birthday"
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                        control={control}
                        placeholder="Enter your birthday"
                        name="gender"
                    ></Input>
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
                <Form.Submit>Update</Form.Submit>
            </Form>
        </div>
    );
};

export default EditProfileUser;
