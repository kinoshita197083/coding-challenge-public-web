import React from 'react'
import { ZellerLogo } from '../Logo';
import { Button } from '../ui/button';
import { LandingSectionProps } from '@/types/contentful/content';

const getBadgeShadow = (shadow: string) => {
    switch (shadow) {
        case 'none':
            return '';
        default:
            return 'shadow-sm border border-slate-100';
    }
}

const LandingSection = (props: LandingSectionProps) => {
    // Remove console.log for production

    // Extract data from props
    const { badge, heading, subHeadings, buttons, layout } = props;

    // Default styling classes
    const sectionClasses = "max-w-6xl mx-auto";
    const containerClasses = "relative overflow-hidden py-12 mb-12";
    const contentClasses = "relative flex flex-col items-center px-4";
    const badgeShadow = getBadgeShadow(badge?.styling?.shadow);

    return (
        <section className={sectionClasses} aria-labelledby="landing-heading">
            <div className={containerClasses}>
                <div className={contentClasses}>
                    {badge && (
                        <>
                            <div className={`p-2 bg-white/20 rounded-full px-4 mb-6 backdrop-blur-sm ${badgeShadow}`}
                                aria-hidden="true">
                                <ZellerLogo size="small" />
                            </div>

                            <div className="w-16 h-1 bg-gradient-to-r from-black to-slate-500 rounded-full mb-6"
                                aria-hidden="true"></div>
                        </>
                    )}


                    {heading && (
                        <h1 id="landing-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 text-center">
                            {heading.text}
                        </h1>
                    )}

                    {subHeadings && subHeadings
                        .sort((a, b) => a.order - b.order)
                        .map((subheading, index) => {
                            const TagName = subheading.tag as React.ElementType; // h2 or h3 tag from Contentful
                            return (
                                <TagName
                                    key={index}
                                    className={`${subheading.tag === 'h2' ?
                                        'text-lg text-muted-foreground text-center max-w-2xl mb-8' :
                                        'text-base text-muted-foreground text-center max-w-2xl mb-4'}`}
                                >
                                    {subheading.text}
                                </TagName>
                            );
                        })
                    }

                    <div className="flex flex-wrap gap-4 justify-center" role="group" aria-label="Action buttons">
                        {buttons && buttons
                            .sort((a, b) => a.order - b.order)
                            .map((button, index) => (
                                <Button
                                    key={index}
                                    variant={button.type === 'primary' ? 'default' : 'outline'}
                                    className={button.type === 'primary' ? "text-white bg-zinc-800 hover:bg-slate-800" : ""}
                                    aria-label={button.text}
                                >
                                    {button.text}
                                </Button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingSection
