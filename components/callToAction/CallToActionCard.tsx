import React from 'react'
import { Button } from '../ui/button'
import { SubscribeCallToActionProps } from '@/types/contentful/content';

const CallToActionCard = (props: SubscribeCallToActionProps) => {
    const { heading, subHeadings, buttons, featuredImage } = props;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-sm border border-slate-100">
            <div className="bg-zinc-800 p-8 md:p-16 flex-1">
                <div className=" w-full">
                    {/* Heading */}
                    <h2 className="text-3xl text-white font-bold mb-8">{heading.text}</h2>

                    {/* Subheadings */}
                    {subHeadings.map((subHeading, index) => (
                        <p key={index} className="text-lg text-white/90 mb-8">{subHeading.text}</p>
                    ))}

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {buttons.map((button, index) => (
                            <Button key={index} variant="outline" className="text-white bg-zinc-900 hover:bg-slate-800">
                                {button.text}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div>
                <div className="h-full">
                    <img
                        src={featuredImage.src}
                        alt={featuredImage.alt}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default CallToActionCard