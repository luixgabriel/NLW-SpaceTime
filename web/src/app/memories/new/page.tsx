import Link from 'next/link'
import { ChevronLeft, Camera } from 'lucide-react'

// NO NEXT A ESTRUTURA DE PASTAS FUNCIONA COM UMA URL DE ROTEAMENTO
const NewMemory = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>
      <form className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-3">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Anexar mídia
          </label>
          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input type="checkbox" name="isPublic" id="isPublic" value={true} />
            Tornar memória pública
          </label>
          <input type="file" id="media" className="invisible" />
        </div>
      </form>
    </div>
  )
}

export default NewMemory
