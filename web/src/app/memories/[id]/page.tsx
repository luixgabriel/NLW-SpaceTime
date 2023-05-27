import { api } from '@/app/lib/api'
import { cookies } from 'next/headers'
import Image from 'next/image'

interface Memory {
  id: string
  coverUrl: string
  content: string
  isPublic?: boolean
  createdAt: string
  userId: string
}

interface IParams {
  params: {
    id: string
  }
}

const SelectedMemory = async ({ params }: IParams) => {
  const id = params.id
  const isAuthenticated = cookies().has('token')
  if (!isAuthenticated) {
    return <h1>RALA DAQUI</h1>
  }

  const token = cookies().get('token')?.value
  const response = await api.get(`memories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const selectedMemory: Memory = response.data
  console.log(selectedMemory)

  return (
    <div>
      <Image
        src={selectedMemory.coverUrl}
        width={592}
        height={280}
        alt="ai"
        className="aspect-video w-full rounded-lg object-cover "
      />
      <p>{selectedMemory.content}</p>
    </div>
  )
}

export default SelectedMemory
