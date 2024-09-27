
interface HeadingProps {
    timeRemaining: number;
    handleSubmit: () => void;
}

const Heading: React.FC<HeadingProps> = ({ timeRemaining, handleSubmit }) => {
    if (timeRemaining === 0) {
        handleSubmit()
    }
    return (
        <div>
            <h1 id='mainHead'>Quiz App</h1>
            {timeRemaining !== 0 ? <h2>Time Remaining :{timeRemaining} seconds</h2> : ''} {/* Display the timer */}

        </div>
    )
}

export default Heading