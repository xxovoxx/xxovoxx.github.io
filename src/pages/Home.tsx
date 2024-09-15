import React from 'react';
import { Avatar } from '@nextui-org/react';


const Home: React.FC = () => {
    return (
        <div className="bg-custom-gray min-h-screen flex-col">
            <div className="flex flex=col items-start justify-center h-full pt-5">
                <Avatar src='https://avatars.githubusercontent.com/u/35602393?v=4' name='Xx_OVO_xX' className="mb-4 w-150 h-150 text-large" />
            </div>
            <p>
                Hello world
            </p>
        </div>
    );
};

export default Home;