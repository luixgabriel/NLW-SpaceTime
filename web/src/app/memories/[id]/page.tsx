'use client'
import { api } from '@/app/lib/api'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

const SelectedMemory = async () => {
  const router = useRouter()
  const id = router.query.id
  return <div>oi</div>
}

export default SelectedMemory
