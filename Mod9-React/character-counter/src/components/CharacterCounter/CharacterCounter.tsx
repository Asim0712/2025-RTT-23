import { useState } from 'react';
import StatsDisplay from '../StatsDisplay/StatsDisplay';
import TextInput from '../TextInput/TextInput';


function CharacterCounter() {
    const [ text, setText ] = useState("");

    const [ stats, setStats ] = useState({
        characterCount: 0,
        wordCount: 0,
        readingTime: 0
    });

    const handleTextChange = (newText) => {
        setText(newText)
        setStats((prevstats) => {

            return {
                ...prevstats,
                characterCount: newText.length,
            }
        });

    };

    return (

        <div>
            <h1>Character Counter</h1>

            <TextInput onTextChange={handleTextChange} />
            <StatsDisplay stats={stats} />
        </div>
    )
}

export default CharacterCounter;