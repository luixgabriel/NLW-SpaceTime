import Link from 'next/link'
const EmptyMemories = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, começe a{' '}
        {/* OS COLCHETES ME AJUDAM A COLOCAR A INFORMAÇÃO QUE EU QUISER */}
        <Link href="/memories/new" className="underline hover:text-gray-50">
          criar agora!
        </Link>{' '}
      </p>
    </div>
  )
}

export default EmptyMemories
