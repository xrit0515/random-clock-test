import React, { useState, useCallback } from 'react'
import Clock from './Clock'

export default function App() {
  // Generate random time with 5-minute intervals
  const generateRandomTime = useCallback(() => {
    const randomHours = Math.floor(Math.random() * 12) // 0-11
    const randomMinutes = Math.floor(Math.random() * 12) * 5 // 0, 5, 10, 15, ... 55
    return { hours: randomHours, minutes: randomMinutes }
  }, [])

  const [time, setTime] = useState(generateRandomTime())
  const [showAnswer, setShowAnswer] = useState(false)
  const [showNumbers, setShowNumbers] = useState(true)

  const handleNextQuestion = () => {
    setTime(generateRandomTime())
    setShowAnswer(false)
  }

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  const handleToggleNumbers = () => {
    setShowNumbers(!showNumbers)
  }

  // Format time for display
  const formatTime = (hours, minutes) => {
    const displayHours = hours === 0 ? 12 : hours
    return `${displayHours}:${minutes.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full md:max-w-lg">
        {/* Clock */}
        <div className="mb-6 flex justify-center">
          <Clock hours={time.hours} minutes={time.minutes} showNumbers={showNumbers} />
        </div>

        {/* Answer Display */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6 h-16 flex items-center justify-center">
          {showAnswer ? (
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Answer:</p>
              <p className="text-3xl font-bold text-blue-600">
                {formatTime(time.hours, time.minutes)}
              </p>
            </div>
          ) : (
            <p className="text-gray-400 text-center">Click "Show Answer" to reveal</p>
          )}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={handleShowAnswer}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
              showAnswer
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {showAnswer ? '✓ Answer Shown' : 'Show Answer'}
          </button>

          <button
            onClick={handleNextQuestion}
            className="w-full py-3 px-4 rounded-lg font-semibold text-white bg-purple-500 hover:bg-purple-600 transition-colors"
          >
            Next Question
          </button>

          <button
            onClick={handleToggleNumbers}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
              showNumbers
                ? 'bg-orange-500 hover:bg-orange-600'
                : 'bg-orange-300 hover:bg-orange-400'
            }`}
          >
            {showNumbers ? 'Hide Numbers' : 'Show Numbers'}
          </button>
        </div>
      </div>
    </div>
  )
}
