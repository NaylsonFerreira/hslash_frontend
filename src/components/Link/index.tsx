import NextLink from 'next/link';

export default function Link({ text = '', href = '/', ...props }) {
    return <NextLink href={href}>
        <a {...props}>{text}</a>
    </NextLink>
}