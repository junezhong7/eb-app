'use client'

import { useState } from 'react'

interface Behavior {
  id: number
  scenario: string
  options: {
    text: string
    score: number
    feedback: string
  }[]
}

const behaviors: Behavior[] = [
  {
    id: 1,
    scenario: "Your friend accidentally bumps into you and it hurts a little. What would you do?",
    options: [
      {
        text: "Yell loudly and push back",
        score: 0,
        feedback: "This might make things worse. We can express our feelings with words, like saying 'You bumped into me, it hurts a little.'"
      },
      {
        text: "Tell your friend how you feel, then continue playing together",
        score: 10,
        feedback: "Excellent! You expressed your feelings well and chose to continue being friendly. This is great communication!"
      },
      {
        text: "Walk away angrily and ignore your friend",
        score: 5,
        feedback: "Walking away can help you calm down, but telling your friend how you feel is better so they can understand you."
      }
    ]
  },
  {
    id: 2,
    scenario: "You want to play with a toy, but another child is playing with it. What would you do?",
    options: [
      {
        text: "Grab it directly",
        score: 0,
        feedback: "Grabbing toys is not a good way and might hurt others. We can wait or ask politely."
      },
      {
        text: "Wait for your turn, or politely ask if you can play together",
        score: 10,
        feedback: "Very good! You learned to wait patiently and communicate politely. These are great social skills!"
      },
      {
        text: "Cry and ask an adult for help",
        score: 3,
        feedback: "Sometimes asking adults for help is okay, but trying to solve the problem yourself first is better."
      }
    ]
  },
  {
    id: 3,
    scenario: "You made a mistake and your teacher or parent found out. What would you do?",
    options: [
      {
        text: "Lie and say you didn't do it",
        score: 0,
        feedback: "Lying will make the problem worse. Being honest might be hard, but it's the right choice."
      },
      {
        text: "Admit the mistake and apologize",
        score: 10,
        feedback: "Very brave! Admitting mistakes takes courage, and it's an important step in growing up. Everyone makes mistakes, what matters is learning from them."
      },
      {
        text: "Stay silent and hope no one notices",
        score: 2,
        feedback: "Staying silent might avoid the problem temporarily, but being honest will make us feel better and get help."
      }
    ]
  },
  {
    id: 4,
    scenario: "You feel very angry because things didn't go as you wanted. What would you do?",
    options: [
      {
        text: "Throw things or hit someone",
        score: 0,
        feedback: "Hurting others or breaking things is not a good way. We can express emotions in other ways."
      },
      {
        text: "Take deep breaths and tell an adult how you feel",
        score: 10,
        feedback: "Excellent! You learned to manage emotions in a healthy way. Deep breathing and expressing feelings are great methods!"
      },
      {
        text: "Cry loudly",
        score: 4,
        feedback: "Crying is one way to express emotions, but telling an adult how you feel will help them help you better."
      }
    ]
  },
  {
    id: 5,
    scenario: "You see a child bullying another child. What would you do?",
    options: [
      {
        text: "Join the bully",
        score: 0,
        feedback: "Bullying others is wrong. We should help the child being bullied, not make things worse."
      },
      {
        text: "Tell a teacher or adult, or help the child being bullied",
        score: 10,
        feedback: "You did the right thing! Helping others and seeking help are both brave and kind actions. You're a good friend!"
      },
      {
        text: "Pretend you didn't see and walk away",
        score: 3,
        feedback: "While walking away is safe, telling an adult can help the child being bullied, which is a better choice."
      }
    ]
  }
]

export default function BehaviorGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [answers, setAnswers] = useState<Array<{ questionId: number; score: number; feedback: string }>>([])

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return

    const currentBehavior = behaviors[currentQuestion]
    const selected = currentBehavior.options[optionIndex]
    
    setSelectedOption(optionIndex)
    setShowFeedback(true)
    setScore(score + selected.score)
    
    setAnswers([...answers, {
      questionId: currentBehavior.id,
      score: selected.score,
      feedback: selected.feedback
    }])
  }

  const handleNext = () => {
    if (currentQuestion < behaviors.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    } else {
      setGameCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedOption(null)
    setShowFeedback(false)
    setGameCompleted(false)
    setAnswers([])
  }

  const getScoreMessage = () => {
    const totalPossible = behaviors.length * 10
    const percentage = (score / totalPossible) * 100
    
    if (percentage >= 80) {
      return {
        title: "Excellent!",
        message: "You made many good choices! You really know how to handle different situations in positive ways. Keep it up!",
        emoji: "🌟"
      }
    } else if (percentage >= 60) {
      return {
        title: "Well Done!",
        message: "You made good choices most of the time. Keep learning, and you'll get even better!",
        emoji: "👍"
      }
    } else if (percentage >= 40) {
      return {
        title: "Keep Trying!",
        message: "You're learning how to make better choices. Remember, everyone is constantly learning and growing!",
        emoji: "💪"
      }
    } else {
      return {
        title: "A Learning Opportunity!",
        message: "This is a great learning opportunity. Remember, making good choices takes practice, and you'll get better!",
        emoji: "📚"
      }
    }
  }

  if (gameCompleted) {
    const result = getScoreMessage()
    return (
      <div className="game-container">
        <div className="game-completed">
          <div className="result-emoji">{result.emoji}</div>
          <h2>{result.title}</h2>
          <div className="final-score">
            <p className="score-label">Your Total Score:</p>
            <p className="score-value">{score} / {behaviors.length * 10}</p>
          </div>
          <p className="result-message">{result.message}</p>
          <div className="answers-summary">
            <h3>Your Choices Review:</h3>
            {answers.map((answer, index) => {
              const behavior = behaviors[index]
              // Find the option that matches the score and feedback
              const selectedOption = behavior.options.find(opt => 
                opt.score === answer.score && opt.feedback === answer.feedback
              ) || behavior.options[0]
              return (
                <div key={index} className="answer-item">
                  <p className="answer-scenario">{behavior.scenario}</p>
                  <p className="answer-choice">Your choice: {selectedOption.text}</p>
                  <p className="answer-feedback">{answer.feedback}</p>
                  <p className="answer-score">Score: {answer.score} points</p>
                </div>
              )
            })}
          </div>
          <button onClick={handleRestart} className="btn-primary btn-large">
            Play Again
          </button>
        </div>
      </div>
    )
  }

  const currentBehavior = behaviors[currentQuestion]
  const progress = ((currentQuestion + 1) / behaviors.length) * 100

  return (
    <div className="game-container">
      <div className="game-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">Question {currentQuestion + 1} / {behaviors.length}</p>
      </div>

      <div className="game-question">
        <h2>{currentBehavior.scenario}</h2>
      </div>

      <div className="game-options">
        {currentBehavior.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === index ? 'selected' : ''} ${showFeedback ? (option.score >= 7 ? 'correct' : option.score === 0 ? 'wrong' : 'partial') : ''}`}
            onClick={() => handleOptionSelect(index)}
            disabled={showFeedback}
          >
            {option.text}
            {showFeedback && selectedOption === index && (
              <span className="option-score">+{option.score} pts</span>
            )}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className="game-feedback">
          <div className="feedback-content">
            <p>{currentBehavior.options[selectedOption!].feedback}</p>
            <p className="current-score">Current Score: {score} points</p>
            <button onClick={handleNext} className="btn-primary">
              {currentQuestion < behaviors.length - 1 ? 'Next Question' : 'View Results'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

