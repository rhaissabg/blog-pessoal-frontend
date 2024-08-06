import React from 'react'
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react"
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr"

function Footer() {
  return (
    <>
        <div className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">Blog Pessoal Generation | Copyright: Rhaíssa Lima</p>
                <p className="text-lg">Acesse minhas redes sociais: </p>
                <div className="flex gap-2">
                    <LinkedinLogo size={48} weight="bold"/>
                    <InstagramLogo size={48} weight="bold"/>
                    <FacebookLogo size={48} weight="bold"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer