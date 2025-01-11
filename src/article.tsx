import type { PropsWithChildren, ComponentPropsWithoutRef, JSX } from "react";
import { createContext, use } from "react";

interface ArticleContextProps {
    richText: boolean;
}

const ArticleContext = createContext<ArticleContextProps | null>(null);

function useArticleContext(): ArticleContextProps {
    const ctx = use(ArticleContext);
    if (ctx === null) {
        throw new Error(
            "useArticleContext must be used within an ArticleContext",
        );
    }
    return ctx;
}

interface ArticleProps
    extends ComponentPropsWithoutRef<"article">,
        PropsWithChildren {}

function Article({ children, ...props }: ArticleProps): JSX.Element {
    const contextValue: ArticleContextProps = {
        richText: true,
    };

    return (
        <ArticleContext value={contextValue}>
            <article {...props} className="prose">
                {children}
            </article>
        </ArticleContext>
    );
}

interface HeaderProps
    extends ComponentPropsWithoutRef<"header">,
        PropsWithChildren {}

function Header({ children, ...props }: HeaderProps): JSX.Element {
    const { richText } = useArticleContext();
    return (
        <header {...props} className="text-lg">
            {children}
            <h2>{richText && <span>Rich text</span>}</h2>
        </header>
    );
}

interface BodyProps
    extends ComponentPropsWithoutRef<"main">,
        PropsWithChildren {}

function Body({ children, ...props }: BodyProps): JSX.Element {
    return (
        <main {...props} className="text-base">
            {children}
        </main>
    );
}

interface FooterProps
    extends ComponentPropsWithoutRef<"footer">,
        PropsWithChildren {}

function Footer({ children, ...props }: FooterProps): JSX.Element {
    return (
        <footer {...props} className="text-sm">
            {children}
        </footer>
    );
}

interface TimeProps
    extends ComponentPropsWithoutRef<"time">,
        PropsWithChildren {}

function Time({ children, ...props }: TimeProps): JSX.Element {
    return (
        <time {...props} dateTime="2015-08-07" className="text-xs">
            {children}
        </time>
    );
}

Article.Header = Header;
Article.Body = Body;
Article.Footer = Footer;
Article.Time = Time;

export { Article };
export type { ArticleProps };
