import React from 'react'
import { Button } from '../ui/button'

const CallToActionCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-sm border border-slate-100">
            <div className="bg-zinc-800 p-8 md:p-16 flex-1">
                <div className=" w-full">
                    <h2 className="text-3xl text-white font-bold mb-8">Let Zeller help you grow your business</h2>
                    <p className="text-lg text-white/90 mb-8">
                        Curated news and content designed for small business owners, delivered to your inbox.
                    </p>
                    <Button variant="outline" className="text-white bg-zinc-900 hover:bg-slate-800">
                        Subscribe
                    </Button>
                </div>
            </div>

            <div>
                <div className="h-full">
                    <img
                        src="/images/call-to-action.webp"
                        alt="Call to Action"
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default CallToActionCard