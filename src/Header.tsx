import {FC} from 'react';
import {Button, Group, Text, TextInput} from "@mantine/core";
import {useAuth} from "./useAuth.ts";
import {useForm} from "./useForm.ts";

interface HeaderProps {
}

export const Header:FC<HeaderProps> = () => {
    const {user, logout, login} = useAuth();
    const {set, values} = useForm();

    return (
      <Group>
          <h1>Twits</h1>
          <Group style={{display: user?'none':''}}>
              <Button onClick={() => login(values)}>Login</Button>
              <TextInput {...set('name')} placeholder='Name'/>
              <TextInput {...set('email')} placeholder='Email'/>
          </Group>

          {user && <Button onClick={logout}>Logout</Button>}
          {user && <Text>Hello, {user.name}</Text>}
      </Group>
 );
};