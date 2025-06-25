import Image from 'next/image';
import React from 'react';

interface ContentNode {
    nodeType: string;
    content?: ContentNode[];
    data?: any;
    value?: string;
    marks?: { type: string }[];
}

interface ContentfulRichTextProps {
    content: ContentNode[];
}

const ContentfulRichText: React.FC<ContentfulRichTextProps> = ({ content }) => {
    if (!content || !Array.isArray(content)) {
        return null;
    }

    const renderMark = (text: string, marks?: { type: string }[]) => {
        if (!marks || marks.length === 0) return text;

        return marks.reduce((result, mark) => {
            switch (mark.type) {
                case 'bold':
                    return <strong key={`bold-${result}`}>{result}</strong>;
                case 'italic':
                    return <em key={`italic-${result}`}>{result}</em>;
                case 'underline':
                    return <u key={`underline-${result}`}>{result}</u>;
                case 'code':
                    return <code key={`code-${result}`} className="bg-gray-100 px-1 py-0.5 rounded">{result}</code>;
                default:
                    return result;
            }
        }, text);
    };

    const renderNode = (node: ContentNode) => {
        if (!node) return null;

        switch (node.nodeType) {
            case 'heading-1':
                return <h1 className="text-4xl font-semibold tracking-tight my-6">{renderContent(node.content)}</h1>;
            case 'heading-2':
                return <h2 className="text-3xl font-semibold tracking-tight mt-16 my-5">{renderContent(node.content)}</h2>;
            case 'heading-3':
                return <h3 className="text-2xl font-semibold tracking-tight my-4">{renderContent(node.content)}</h3>;
            case 'heading-4':
                return <h4 className="text-xl font-semibold tracking-tight my-3">{renderContent(node.content)}</h4>;
            case 'heading-5':
                return <h5 className="text-lg font-semibold tracking-tight my-2">{renderContent(node.content)}</h5>;
            case 'heading-6':
                return <h6 className="text-base font-semibold tracking-tight my-1">{renderContent(node.content)}</h6>;
            case 'paragraph':
                return <p className="my-4 leading-7 [&:not(:first-child)]:mt-6">{renderContent(node.content)}</p>;
            case 'text':
                return renderMark(node.value || '', node.marks);
            case 'hyperlink':
                return <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{renderContent(node.content)}</a>;
            case 'unordered-list':
                return <ul className="list-disc pl-6 my-4">{renderContent(node.content)}</ul>;
            case 'ordered-list':
                return <ol className="list-decimal pl-6 my-4">{renderContent(node.content)}</ol>;
            case 'list-item':
                return <li className="my-1">{renderContent(node.content)}</li>;
            case 'hr':
                return <hr className="my-8 border-gray-300" />;
            case 'embedded-asset-block':
                return (
                    <div className="my-4">
                        <Image
                            src={`https:${node.data.target.fields.file.url}`}
                            alt={node.data.target.fields.title}
                            width={600}
                            height={600}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                );
            case 'blockquote':
                return <blockquote className="border-l-4 border-gray-300 pl-4 py-1 my-4 italic">{renderContent(node.content)}</blockquote>;
            default:
                return null;
        }
    };

    const renderContent = (contentArray?: ContentNode[]) => {
        if (!contentArray || !Array.isArray(contentArray)) return null;

        return contentArray.map((node, index) => (
            <React.Fragment key={index}>
                {renderNode(node)}
            </React.Fragment>
        ));
    };

    return <div className="contentful-rich-text">{renderContent(content)}</div>;
};

export default ContentfulRichText; 