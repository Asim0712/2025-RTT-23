
function StatsDisplay({ 
  stats = { characterCount: 0, wordCount: 0, readingTime: '0:00' }, 
  showReadingTime = false 
}) {
    return (
        <div>   
            <div>
                <div>Characters: {stats.characterCount}</div>
            </div>
            <div>Words: {stats.wordCount}</div>
            <div>
                Reading Time: {showReadingTime ? stats.readingTime : '0:00'}
            </div>
        </div>
    );
}

export default StatsDisplay;