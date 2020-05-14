import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import TrueScale from './TrueScale';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';

const TrueScaleCard = ({ defaultOpen }) => {
    const [fundamental, setFundamental] = useState(100);
    const [n, setN] = useState(32);

    return (
        <Card title="TrueScale" defaultOpen={defaultOpen}>
            <TrueScale fundamental={fundamental} n={n} />
            
            <label>Fundamental:</label>
            <ScalarInput value={fundamental} setValue={setFundamental} />
            <label>n:</label>
            <ScalarInput value={n} setValue={setN} />
        </Card>
    )
}

export default TrueScaleCard;