import "@mantine/core/styles.css";
import {Container, Space} from "@mantine/core";
import {Twits} from "./Twits.tsx";
import {Header} from "./Header.tsx";
import {useTwits} from "./useTwits.ts";
import {CreateTwit} from "./CreateTwit.tsx";
import {useAuth} from "./useAuth.ts";


export default function App() {
    const twits = useTwits((state) => state.twits)
    const user = useAuth((state) => state.user)
    return <Container size='md'>
        <Header/>
        <Space h='lg'/>
        {user && <CreateTwit/>}
        <Twits twits={twits}/>
    </Container>
}