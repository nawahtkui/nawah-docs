'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type GameState = 'playing' | 'gameOver' | 'paused';

interface SnakeSegment {
  x: number;
  y: number;
}

const GRID_SIZE = 20;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const CELL_SIZE = CANVAS_WIDTH / GRID_SIZE;

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<SnakeSegment[]>([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ]);
  const [food, setFood] = useState<SnakeSegment>({ x: 15, y: 10 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [nextDirection, setNextDirection] = useState<Direction>('RIGHT');
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<GameState>('playing');
  const [difficulty, setDifficulty] = useState(1);
  const [highScore, setHighScore] = useState(0);
  const gameLoopRef = useRef<NodeJS.Timeout>();
  const directionQueueRef = useRef<Direction>(direction);

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('snakeHighScore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Generate random food position
  const generateFood = (currentSnake: SnakeSegment[]): SnakeSegment => {
    let newFood: SnakeSegment;
    let isOnSnake = true;

    while (isOnSnake) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      isOnSnake = currentSnake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      );
    }

    return newFood;
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;

      const key = e.key.toLowerCase();
      let newDirection: Direction | null = null;

      if (key === 'arrowup' || key === 'w') {
        newDirection = 'UP';
      } else if (key === 'arrowdown' || key === 's') {
        newDirection = 'DOWN';
      } else if (key === 'arrowleft' || key === 'a') {
        newDirection = 'LEFT';
      } else if (key === 'arrowright' || key === 'd') {
        newDirection = 'RIGHT';
      } else if (key === ' ') {
        e.preventDefault();
        setGameState((prev) => (prev === 'playing' ? 'paused' : 'playing'));
        return;
      }

      if (newDirection) {
        e.preventDefault();
        // Prevent reversing into itself
        const opposites: Record<Direction, Direction> = {
          UP: 'DOWN',
          DOWN: 'UP',
          LEFT: 'RIGHT',
          RIGHT: 'LEFT',
        };

        if (newDirection !== opposites[direction]) {
          directionQueueRef.current = newDirection;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState, direction]);

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    gameLoopRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        const newDirection = directionQueueRef.current;
        setDirection(newDirection);

        // Calculate new head position
        let newHead = { ...prevSnake[0] };

        switch (newDirection) {
          case 'UP':
            newHead.y = (newHead.y - 1 + GRID_SIZE) % GRID_SIZE;
            break;
          case 'DOWN':
            newHead.y = (newHead.y + 1) % GRID_SIZE;
            break;
          case 'LEFT':
            newHead.x = (newHead.x - 1 + GRID_SIZE) % GRID_SIZE;
            break;
          case 'RIGHT':
            newHead.x = (newHead.x + 1) % GRID_SIZE;
            break;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check collision with self
        if (
          prevSnake.some(
            (segment) => segment.x === newHead.x && segment.y === newHead.y
          )
        ) {
          setGameState('gameOver');
          const finalScore = score;
          if (finalScore > highScore) {
            setHighScore(finalScore);
            localStorage.setItem('snakeHighScore', finalScore.toString());
          }
          return prevSnake;
        }

        // Check if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          const newScore = score + (difficulty * 10);
          setScore(newScore);

          // Increase difficulty every 100 points
          const newDifficulty = Math.floor(newScore / 100) + 1;
          setDifficulty(newDifficulty);

          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, Math.max(50, 200 - difficulty * 20));

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [gameState, food, score, difficulty, highScore]);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, CANVAS_HEIGHT);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(CANVAS_WIDTH, i * CELL_SIZE);
      ctx.stroke();
    }

    // Draw snake
    snake.forEach((segment, index) => {
      if (index === 0) {
        // Head - gradient
        const gradient = ctx.createLinearGradient(
          segment.x * CELL_SIZE,
          segment.y * CELL_SIZE,
          (segment.x + 1) * CELL_SIZE,
          (segment.y + 1) * CELL_SIZE
        );
        gradient.addColorStop(0, '#4ade80');
        gradient.addColorStop(1, '#22c55e');
        ctx.fillStyle = gradient;
      } else {
        // Body - green gradient
        ctx.fillStyle = `rgba(74, 222, 128, ${1 - index / snake.length * 0.5})`;
      }

      ctx.fillRect(
        segment.x * CELL_SIZE + 1,
        segment.y * CELL_SIZE + 1,
        CELL_SIZE - 2,
        CELL_SIZE - 2
      );

      // Eye on head
      if (index === 0) {
        ctx.fillStyle = '#000000';
        const eyeSize = 3;
        let eyeX = segment.x * CELL_SIZE + CELL_SIZE / 2;
        let eyeY = segment.y * CELL_SIZE + CELL_SIZE / 2;

        // Position eyes based on direction
        if (direction === 'RIGHT') {
          eyeX += 3;
        } else if (direction === 'LEFT') {
          eyeX -= 3;
        } else if (direction === 'DOWN') {
          eyeY += 3;
        } else if (direction === 'UP') {
          eyeY -= 3;
        }

        ctx.fillRect(eyeX - eyeSize / 2, eyeY - eyeSize / 2, eyeSize, eyeSize);
      }
    });

    // Draw food
    const gradient = ctx.createRadialGradient(
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      0,
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE / 2
    );
    gradient.addColorStop(0, '#fbbf24');
    gradient.addColorStop(1, '#f59e0b');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }, [snake, food, direction]);

  const resetGame = () => {
    setSnake([
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ]);
    setFood({ x: 15, y: 10 });
    setDirection('RIGHT');
    setNextDirection('RIGHT');
    directionQueueRef.current = 'RIGHT';
    setScore(0);
    setDifficulty(1);
    setGameState('playing');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="space-y-6">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-green-400 drop-shadow-lg">
            🐍 Snake Game
          </h1>
          <p className="text-slate-400 text-sm">
            Use arrow keys or WASD to move • Press SPACE to pause
          </p>
        </div>

        {/* Main Game Container */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
          {/* Canvas and Stats */}
          <div className="space-y-4">
            {/* Game Canvas */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-green-500/50">
              <canvas
                ref={canvasRef}
                width={CANVAS_WIDTH}
                height={CANVAS_HEIGHT}
                className="block bg-slate-950"
              />
              {/* Overlay Messages */}
              {gameState === 'paused' && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-2xl font-bold">PAUSED</p>
                    <p className="text-slate-300 text-sm mt-2">
                      Press SPACE to resume
                    </p>
                  </div>
                </div>
              )}
              {gameState === 'gameOver' && (
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4">
                  <div className="text-center">
                    <p className="text-red-400 text-3xl font-bold">GAME OVER</p>
                    <p className="text-white text-xl font-semibold mt-2">
                      Final Score: {score}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="bg-slate-800 border-slate-700 p-3 text-center">
                <p className="text-slate-400 text-xs font-semibold uppercase">
                  Score
                </p>
                <p className="text-green-400 text-2xl font-bold">{score}</p>
              </Card>
              <Card className="bg-slate-800 border-slate-700 p-3 text-center">
                <p className="text-slate-400 text-xs font-semibold uppercase">
                  Level
                </p>
                <p className="text-yellow-400 text-2xl font-bold">{difficulty}</p>
              </Card>
              <Card className="bg-slate-800 border-slate-700 p-3 text-center">
                <p className="text-slate-400 text-xs font-semibold uppercase">
                  High Score
                </p>
                <p className="text-amber-400 text-2xl font-bold">{highScore}</p>
              </Card>
            </div>
          </div>

          {/* Controls and Info */}
          <div className="space-y-4 w-full lg:w-80">
            {/* Controls */}
            <Card className="bg-slate-800 border-slate-700 p-6 space-y-4">
              <h2 className="text-lg font-bold text-white">Controls</h2>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-1 bg-slate-700 rounded border border-slate-600 font-mono text-xs">
                    ↑
                  </kbd>
                  <span>Move Up</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-1 bg-slate-700 rounded border border-slate-600 font-mono text-xs">
                    ↓
                  </kbd>
                  <span>Move Down</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-1 bg-slate-700 rounded border border-slate-600 font-mono text-xs">
                    ←
                  </kbd>
                  <span>Move Left</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-1 bg-slate-700 rounded border border-slate-600 font-mono text-xs">
                    →
                  </kbd>
                  <span>Move Right</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-1 bg-slate-700 rounded border border-slate-600 font-mono text-xs">
                    Space
                  </kbd>
                  <span>Pause/Resume</span>
                </div>
              </div>
            </Card>

            {/* Game Info */}
            <Card className="bg-slate-800 border-slate-700 p-6 space-y-3">
              <h2 className="text-lg font-bold text-white">How to Play</h2>
              <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                <li>Control the snake with arrow keys or WASD</li>
                <li>Eat the golden food to grow</li>
                <li>Each food gives 10 × level points</li>
                <li>Level increases every 100 points</li>
                <li>Higher levels = faster snake</li>
                <li>Don't hit the walls or yourself!</li>
              </ul>
            </Card>

            {/* Buttons */}
            <div className="space-y-2">
              <Button
                onClick={resetGame}
                className={`w-full py-6 text-lg font-bold transition-all ${
                  gameState === 'gameOver'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                {gameState === 'gameOver' ? '🔄 Play Again' : '🔄 New Game'}
              </Button>

              {gameState === 'playing' && (
                <Button
                  onClick={() => setGameState('paused')}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3"
                >
                  ⏸ Pause
                </Button>
              )}

              {gameState === 'paused' && (
                <Button
                  onClick={() => setGameState('playing')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3"
                >
                  ▶ Resume
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
