interface ArticleProps {
    children: React.ReactNode;
}

function Article({ children }: ArticleProps) {
    return <article className="prose">{children}</article>;
}

export { Article };
export type { ArticleProps };
