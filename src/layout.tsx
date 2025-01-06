interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <main>
            <article className="prose">{children}</article>
        </main>
    );
}

export { Layout };
export type { LayoutProps };
