// src/pages/Welcome.tsx
import { useNavigate } from 'react-router-dom'
import WelcomeSplash from '../components/WelcomeSplash'

export default function Welcome() {
  const navigate = useNavigate()
  return (
    <WelcomeSplash
      durationMs={2000}
      onDone={() => navigate('/')}
    />
  )
}
