'use client'

import { useState } from 'react'

interface DragItem {
  id: number
  text: string
  category: 'correct' | 'incorrect'
  emoji?: string
}

interface DragQuestion {
  id: number
  scenario: string
  correctItems: DragItem[]
  incorrectItems: DragItem[]
  droppedItems: DragItem[]
  feedback: string
}

const initialQuestions: DragQuestion[] = [
  {
    id: 1,
    scenario: "You're feeling angry. Drag the healthy ways to handle anger to the box.",
    correctItems: [
      { id: 1, text: "Take deep breaths", category: 'correct', emoji: "😤" },
      { id: 2, text: "Tell an adult how you feel", category: 'correct', emoji: "💬" },
      { id: 3, text: "Count to 10", category: 'correct', emoji: "🔢" }
    ],
    incorrectItems: [
      { id: 4, text: "Hit someone", category: 'incorrect', emoji: "👊" },
      { id: 5, text: "Throw things", category: 'incorrect', emoji: "💥" },
      { id: 6, text: "Yell at everyone", category: 'incorrect', emoji: "😠" }
    ],
    droppedItems: [],
    feedback: "Great job! These are healthy ways to manage anger. Remember, it's okay to feel angry, but we should express it in safe ways."
  },
  {
    id: 2,
    scenario: "You want to make friends. Drag the good friendship behaviors to the box.",
    correctItems: [
      { id: 7, text: "Be kind and respectful", category: 'correct', emoji: "🤝" },
      { id: 8, text: "Share and take turns", category: 'correct', emoji: "🎁" },
      { id: 9, text: "Listen to others", category: 'correct', emoji: "👂" }
    ],
    incorrectItems: [
      { id: 10, text: "Be mean to others", category: 'incorrect', emoji: "😡" },
      { id: 11, text: "Take things without asking", category: 'incorrect', emoji: "🤏" },
      { id: 12, text: "Ignore what others say", category: 'incorrect', emoji: "🙉" }
    ],
    droppedItems: [],
    feedback: "Excellent! These behaviors help build strong friendships. Good friends are kind, respectful, and care about each other."
  },
  {
    id: 3,
    scenario: "You made a mistake. Drag the right ways to handle it to the box.",
    correctItems: [
      { id: 13, text: "Admit the mistake", category: 'correct', emoji: "✅" },
      { id: 14, text: "Say sorry", category: 'correct', emoji: "🙏" },
      { id: 15, text: "Learn from it", category: 'correct', emoji: "📚" }
    ],
    incorrectItems: [
      { id: 16, text: "Blame someone else", category: 'incorrect', emoji: "👆" },
      { id: 17, text: "Lie about it", category: 'incorrect', emoji: "🤥" },
      { id: 18, text: "Pretend it didn't happen", category: 'incorrect', emoji: "🙈" }
    ],
    droppedItems: [],
    feedback: "Well done! Admitting mistakes and learning from them shows courage and helps us grow. Everyone makes mistakes!"
  },
  {
    id: 4,
    scenario: "Someone is being bullied. Drag the helpful actions to the box.",
    correctItems: [
      { id: 19, text: "Tell a teacher or adult", category: 'correct', emoji: "👨‍🏫" },
      { id: 20, text: "Be kind to the person", category: 'correct', emoji: "💝" },
      { id: 21, text: "Stand up for them", category: 'correct', emoji: "🛡️" }
    ],
    incorrectItems: [
      { id: 22, text: "Join the bullies", category: 'incorrect', emoji: "👥" },
      { id: 23, text: "Laugh at them", category: 'incorrect', emoji: "😆" },
      { id: 24, text: "Do nothing", category: 'incorrect', emoji: "😐" }
    ],
    droppedItems: [],
    feedback: "Perfect! Helping others who are being bullied is brave and kind. We should always stand up for what's right."
  },
  {
    id: 5,
    scenario: "You're feeling sad. Drag the helpful things to do to the box.",
    correctItems: [
      { id: 25, text: "Talk to someone you trust", category: 'correct', emoji: "💬" },
      { id: 26, text: "Do something you enjoy", category: 'correct', emoji: "🎨" },
      { id: 27, text: "Ask for a hug", category: 'correct', emoji: "🤗" }
    ],
    incorrectItems: [
      { id: 28, text: "Keep it all inside", category: 'incorrect', emoji: "🔒" },
      { id: 29, text: "Be mean to others", category: 'incorrect', emoji: "😠" },
      { id: 30, text: "Give up on everything", category: 'incorrect', emoji: "😞" }
    ],
    droppedItems: [],
    feedback: "Wonderful! It's okay to feel sad sometimes. Talking to someone and doing things you enjoy can help you feel better."
  }
]

export default function DragGame() {
  const [questions, setQuestions] = useState<DragQuestion[]>(initialQuestions.map(q => ({ ...q })))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [answers, setAnswers] = useState<Array<{ questionId: number; score: number; correctCount: number; totalCorrect: number }>>([])

  const handleDragStart = (item: DragItem) => {
    setDraggedItem(item)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (!draggedItem) return

    const updatedQuestions = [...questions]
    const currentQ = updatedQuestions[currentQuestion]

    // Remove item from its current location
    const allItems = [...currentQ.correctItems, ...currentQ.incorrectItems, ...currentQ.droppedItems]
    const itemIndex = allItems.findIndex(i => i.id === draggedItem.id)
    
    if (itemIndex === -1) return

    // Add to dropped items if not already there
    if (!currentQ.droppedItems.find(i => i.id === draggedItem.id)) {
      currentQ.droppedItems.push(draggedItem)
      
      // Remove from correct or incorrect items
      const correctIndex = currentQ.correctItems.findIndex(i => i.id === draggedItem.id)
      const incorrectIndex = currentQ.incorrectItems.findIndex(i => i.id === draggedItem.id)
      
      if (correctIndex !== -1) {
        currentQ.correctItems.splice(correctIndex, 1)
      }
      if (incorrectIndex !== -1) {
        currentQ.incorrectItems.splice(incorrectIndex, 1)
      }
    }

    setQuestions(updatedQuestions)
    setDraggedItem(null)
  }

  const handleRemoveFromDrop = (item: DragItem) => {
    const updatedQuestions = [...questions]
    const currentQ = updatedQuestions[currentQuestion]

    const index = currentQ.droppedItems.findIndex(i => i.id === item.id)
    if (index === -1) return

    currentQ.droppedItems.splice(index, 1)

    // Add back to correct or incorrect items
    if (item.category === 'correct') {
      currentQ.correctItems.push(item)
    } else {
      currentQ.incorrectItems.push(item)
    }

    setQuestions(updatedQuestions)
  }

  const handleCheckAnswer = () => {
    const currentQ = questions[currentQuestion]
    const correctDropped = currentQ.droppedItems.filter(item => item.category === 'correct').length
    const incorrectDropped = currentQ.droppedItems.filter(item => item.category === 'incorrect').length
    const totalCorrect = currentQ.correctItems.length + correctDropped
    
    // Score: 10 points for each correct item dropped, -5 for each incorrect item dropped
    const questionScore = Math.max(0, (correctDropped * 10) - (incorrectDropped * 5))
    
    setScore(score + questionScore)
    setShowFeedback(true)
    
    setAnswers([...answers, {
      questionId: currentQ.id,
      score: questionScore,
      correctCount: correctDropped,
      totalCorrect: totalCorrect
    }])
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowFeedback(false)
    } else {
      setGameCompleted(true)
    }
  }

  const handleRestart = () => {
    setQuestions(initialQuestions.map(q => ({ ...q })))
    setCurrentQuestion(0)
    setScore(0)
    setShowFeedback(false)
    setGameCompleted(false)
    setAnswers([])
    setDraggedItem(null)
  }

  const getScoreMessage = () => {
    const totalPossible = questions.length * 30 // Max 3 correct items per question * 10 points
    const percentage = (score / totalPossible) * 100
    
    if (percentage >= 80) {
      return {
        title: "Excellent!",
        message: "You did an amazing job! You understand how to make good choices in different situations. Keep it up!",
        emoji: "🌟"
      }
    } else if (percentage >= 60) {
      return {
        title: "Well Done!",
        message: "You made many good choices! Keep practicing and you'll get even better at recognizing the right behaviors.",
        emoji: "👍"
      }
    } else if (percentage >= 40) {
      return {
        title: "Keep Trying!",
        message: "You're learning! Remember, making good choices takes practice. You're doing great!",
        emoji: "💪"
      }
    } else {
      return {
        title: "Learning Opportunity!",
        message: "This is a great chance to learn! Every choice teaches us something. Keep practicing!",
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
            <p className="score-value">{score} / {questions.length * 30}</p>
          </div>
          <p className="result-message">{result.message}</p>
          <button onClick={handleRestart} className="btn-primary btn-large">
            Play Again
          </button>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const correctDropped = currentQ.droppedItems.filter(item => item.category === 'correct').length
  const incorrectDropped = currentQ.droppedItems.filter(item => item.category === 'incorrect').length

  return (
    <div className="game-container">
      <div className="game-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">Question {currentQuestion + 1} / {questions.length}</p>
      </div>

      <div className="game-question">
        <h2>{currentQ.scenario}</h2>
      </div>

      <div className="drag-game-area">
        <div className="drag-items-container">
          <h3>Drag items here:</h3>
          <div className="drag-items-grid">
            {currentQ.correctItems.map((item) => (
              <div
                key={item.id}
                className="drag-item"
                draggable
                onDragStart={() => handleDragStart(item)}
              >
                {item.emoji && <span className="item-emoji">{item.emoji}</span>}
                <span className="item-text">{item.text}</span>
              </div>
            ))}
            {currentQ.incorrectItems.map((item) => (
              <div
                key={item.id}
                className="drag-item"
                draggable
                onDragStart={() => handleDragStart(item)}
              >
                {item.emoji && <span className="item-emoji">{item.emoji}</span>}
                <span className="item-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h3>Drop correct items here:</h3>
          {currentQ.droppedItems.length === 0 ? (
            <p className="drop-zone-placeholder">Drag items here...</p>
          ) : (
            <div className="dropped-items">
              {currentQ.droppedItems.map((item) => (
                <div
                  key={item.id}
                  className={`dropped-item ${item.category === 'correct' ? 'correct' : 'incorrect'}`}
                  onClick={() => handleRemoveFromDrop(item)}
                  title="Click to remove"
                >
                  {item.emoji && <span className="item-emoji">{item.emoji}</span>}
                  <span className="item-text">{item.text}</span>
                  <span className="remove-icon">×</span>
                </div>
              ))}
            </div>
          )}
          {!showFeedback && currentQ.droppedItems.length > 0 && (
            <button onClick={handleCheckAnswer} className="btn-primary check-button">
              Check Answer
            </button>
          )}
        </div>
      </div>

      {showFeedback && (
        <div className="game-feedback">
          <div className="feedback-content">
            <p>{currentQ.feedback}</p>
            <div className="score-breakdown">
              <p>Correct items: {correctDropped} (+{correctDropped * 10} points)</p>
              {incorrectDropped > 0 && (
                <p>Incorrect items: {incorrectDropped} (-{incorrectDropped * 5} points)</p>
              )}
              <p className="current-score">Current Score: {score} points</p>
            </div>
            <button onClick={handleNext} className="btn-primary">
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

