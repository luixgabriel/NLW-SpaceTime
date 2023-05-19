const EmptyMemories = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, começe a{' '}
        {/* OS COLCHETES ME AJUDAM A COLOCAR A INFORMAÇÃO QUE EU QUISER */}
        <a href="#" className="underline hover:text-gray-50">
          criar agora!
        </a>{' '}
      </p>
    </div>
  )
}

export default EmptyMemories
