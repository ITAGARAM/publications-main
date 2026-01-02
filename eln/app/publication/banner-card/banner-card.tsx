"use client"
import Link from "next/link";
import Image from "next/image";
const CATEGORY_LABELS: Record<string, string> = {
    general: "General",
    product: "Industry",
    news: "News & Event",
    featured: "Featured",
    all: 'All',
    caseStudy: 'Case Study',
    whitePaper: 'White Paper',
    ebook: 'Ebook'
};

interface BannerCardProps {
    img: string;
    alt?: string;
    label: string;
    title: string;
    desc?: string;
    author?: string;
    authorUrl?: string;
    usernameTags?: string[];
    publishedAt?: string;
    slug: string;
    pageName: string;
}
export default function BannerCard(props: BannerCardProps) {
    const tagColors = ["green", "purple", "orange"];
    return (
        <div className="bannercard">
            <Link href={`/${props.pageName === 'publication' ? 'publication' : 'blog'}/${props.slug}`}>
                <Image
                    src={props.img}
                    alt={props.alt || props.title}
                    width={490}       // Add appropriate fixed width here
                    height={338}      // Add appropriate fixed height here
                    className="img-fluid"
                />
            </Link>

            <label>{CATEGORY_LABELS[props.label] || props.label}</label>


            <Link href={`/${props.pageName === 'publication' ? 'publication' : 'blog'}/${props.slug}`}>
                <h4>
                    {props.title
                        ? props.title.split(" ").slice(0, 10).join(" ") +
                        (props.title.split(" ").length > 15 ? "..." : "")
                        : ""}
                </h4>

            </Link>
            <p>
                {props.desc
                    ? props.desc.split(" ").slice(0, 10).join(" ") +
                    (props.desc.split(" ").length > 10 ? "..." : "")
                    : ""}
            </p>


            <div className="tag-btn-mt">
                {props.usernameTags?.map((tag, idx) => {
                    // Cycle through the colors
                    const colorClass = `tag-btn-${tagColors[idx % tagColors.length]}`;
                    return (
                        <Link key={idx} href={`/blog/tag/${tag}`}>
                            <button
                                className={`tag-btn mt-2 ${colorClass} ms-${idx > 0 ? 2 : 0}`}
                            >
                                {tag}
                            </button>
                        </Link>
                    );
                })}
            </div>
            <div className="mt-4">
                {props.author && props.authorUrl ? (
                    <a
                        href={props.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="posted-date d-inline-block"
                        style={{ textDecoration: 'none' }}
                    >
                        <span className="author-name px-2" style={{ color: '#1163EA', fontWeight: '600' }}>
                            {props.author}
                        </span>
                        <span style={{ fontWeight: '400', marginLeft: '5px', color: '#000' }}>
                            {props.publishedAt
                                ? new Date(props.publishedAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric',
                                })
                                : ""}
                        </span>
                    </a>
                ) : (
                    <span className="posted-date">
                        <span className="author-name px-2" style={{ color: '#1163EA', fontWeight: '600' }}>
                            {props.author}
                        </span>
                        <span style={{ fontWeight: '400', marginLeft: '5px' }}>
                            {props.publishedAt
                                ? new Date(props.publishedAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric',
                                })
                                : ""}
                        </span>
                    </span>
                )}
            </div>
        </div>
    );
}
