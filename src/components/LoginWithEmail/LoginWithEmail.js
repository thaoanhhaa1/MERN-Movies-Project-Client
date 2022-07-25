import Button from '../Button';
import Form from '../Form';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Label from '../Label';

const LoginWithEmail = () => {
    return (
        <Form>
            <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input name="email" placeholder="Email address"></Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                ></Input>
            </FormGroup>
            <Button className="w-full" large primary>
                Login
            </Button>
        </Form>
    );
};

export default LoginWithEmail;
