import React from 'react';
import { Button } from '../ui-component/src'; // Đường dẫn đến ui-component

const App = () => {
    return (
        <div>
            <h1>Welcome to VungLiemTown</h1>
            <Button title="Click Me" onPress={() => alert('Button Clicked!')} />
        </div>
    );
};

export default App;
