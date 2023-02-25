function CountDownButton() {
    const [count, setCount] = useState(10);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let intervalId;
        if (!isPaused && count > 0) {
            intervalId = setInterval(() => {
                setCount(count => count - 1), 1000
            });
        }
        return () => clearInterval(intervalId); //closure 
    }, [isPaused]);


    return (
        <button onClick={() => {
            setIsPaused(prev => !prev);
        }}>
            {isPaused ? 'Resume' : 'Pause'} Count Down: {count}
        </button>
    );
}

//